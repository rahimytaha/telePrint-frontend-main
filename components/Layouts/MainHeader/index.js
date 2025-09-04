/** @format */

import { Component } from "react"
import { Modal } from "rsuite"
import Menu from "../menu"
import Link from "next/link"
import Cookies from "universal-cookie"
import { on } from "jetemit"

//api
import { cart } from "../../../api/Api"
// redux

//svg
import MenuSvg from "../../../public/assets/svg/menu"
import Logo from "../../../public/assets/svg/mainLogo"
import SearchBox from "./SearchBox"
const cookies = new Cookies()

class Header extends Component {
  state = {
    data: [],
    reduxCart: "",
    openDrawerState: false,
    show: false,
    openPayment: false,
    statusCode: 0,
    loading: false,
    orderLength: 0,
    amount: 0,
    logOutModal: false
  }

  componentDidMount() {
    this.getOrder()
    on("order", (order) => {
      this.getOrder()
    })
    on("logOut", () => {
      this.handleLogOut()
    })
  }

  openDrawer = async () => {
    await this.setState({ openDrawerState: true })
  }
  closeDrawer = () => {
    this.setState({ openDrawerState: false })
  }

  getOrder = async () => {
    try {
      const cookies = new Cookies()
      const token = cookies.get("token")

      if (!token) {
        console.log("you dont have token")
        return
      }

      const newValue = {
        statusCode: this.state.statusCode
      }

      const { data, status } = await cart.getAllOrder(newValue)

      if (status === 200) {
        let amount = 0
        data?.data?.orderItems.map((product) => {
          amount += Number(product.tableId.finalPrice)
        })
        this.setState({
          order: data?.data?.orderItems,
          orderLength: data?.data?.orderItems.length,
          amount: amount
        })
        return
      }
      if (status === 204) {
        this.setState({
          order: [],
          orderLength: 0
        })
        return
      }
    } catch (error) {
      console.error(error)
    }
  }

  handlePay = async () => {
    try {
      const personalData = JSON.parse(localStorage.getItem("personalData") && localStorage.getItem("personalData"))

      const newValue = {
        phoneNumber: personalData.phoneNumber,
        email: personalData.email
      }

      const data = await cart.payment(newValue)
      localStorage.setItem("amount", data.data.data.amount)

      window.location.assign(`/payment/${data.data.data.client_secret}`)
    } catch (error) {
      console.error(error)
    }
  }

  cancelOrder = async (id) => {
    this.setState({ loading: true })
    try {
      await cart.deleteOrder(id)
    } catch (error) {
      console.error(error)
    }
    await this.getOrder()
    this.setState({ loading: false })
  }
  back = () => {
    window.history.back()
  }

  handleClosePayPal = () => {
    this.setState({ openPayPal: false })
    this.getOrder()
  }

  handleOpenPayPal = () => {
    this.setState({ openPayPal: true })
  }

  handleClosePayment = () => {
    this.setState({ openPayment: false })
  }

  handleOpenPayment = () => {
    this.setState({ openPayment: true })
  }

  handleLogOut = async () => {
    this.setState({ orderLength: 0 })
    await cookies.remove("token")
    await localStorage.clear()
    await localStorage.removeItem("personalData")
    await localStorage.removeItem("token")
    this.props.router.push("/")
    this.close()
    this.setState({ logOutModal: false })
  }

  open = () => {
    this.setState({ show: true })
  }

  close = () => {
    this.setState({
      show: false
    })
  }

  render() {
    const token = cookies.get("token")

    const { openDrawerState, order, show, loading, orderLength, logOutModal } = this.state
    const router = this.props.router
    const Pages = [
      { pathname: "/aboutUs", title: "درباره ما" },
      { pathname: "/contactUs", title: "تماس با ما" },
      { pathname: "/blogs", title: "اخبار ویژه و مقالات" },
      { pathname: "/blogs/[id]", title: "اخبار ویژه و مقالات" },
      { pathname: "/product", title: "محصولات" }
    ]
    const titlePage = Pages.find((page) => page.pathname === router.pathname)

    return (
      <header>
        <Modal show={logOutModal} onHide={() => this.setState({ logOutModal: false })}>
          <Modal.Header>
            <Modal.Title>
              <p className="modal-title">Ausloggen</p>
            </Modal.Title>
            <Modal.Body>
              <p className="modal-title">Sind Sie sich beim Ausstieg sicher?</p>
            </Modal.Body>
            <Modal.Footer>
              <div className="button-footer">
                <button className="outline-button button-style" onClick={() => this.setState({ logOutModal: false })}>
                  schließen
                </button>
                <button className="primary-button button-style" onClick={this.handleLogOut}>
                  Ausloggen
                </button>
              </div>
            </Modal.Footer>
          </Modal.Header>
        </Modal>
        <Menu show={show} close={this.close} orderLength={orderLength || orderLength === 0 ? orderLength : ""} />
        <div className="page-header">
          <div className="header-container">
            <div className="header-items">
              <Link href="/">
                <a>
                  <div className="header-left-items">
                    <div className="header-img">
                      <Logo />
                    </div>
                    <div className="header-title-info">
                      <div className="header-title">TelePrint</div>
                      <div className="header-title-details">Digitaldruck.</div>
                    </div>
                  </div>
                </a>
              </Link>
              <SearchBox/>
              <div className="header-right-items">
                {!token ? (
                  <Link prefetch={false} href="/login" passHref>
                    <div className="header-options">Anmelden</div>
                  </Link>
                ) : (
                  <div className="header-options" onClick={() => this.setState({ logOutModal: true })}>
                    Ausloggen
                  </div>
                )}

                {token ? (
                  <div className="header-options">
                    <Link href="/dashboard/profile">Benutzerkonto</Link>
                  </div>
                ) : (
                  ""
                )}

                <div className="header-options">
                  <Link href="/contactUs">Kontakt </Link>
                </div>
                <div className="header-options ">
                  <Link href="/">Home</Link>
                </div>
                <div onClick={this.open} className="menu-icon">
                  <span>
                    <MenuSvg />
                  </span>
                  {orderLength !== 0 ? (
                    <div className="menu-notifications">
                      <div className="numbers-of-notifications">{orderLength || orderLength === 0 ? orderLength : ""}</div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
