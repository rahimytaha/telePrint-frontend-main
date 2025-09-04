import React, { Component, Fragment } from "react"
import { emit } from "jetemit"
import Link from "next/link"
export default class gride extends Component {
  state = {
    show: false,
    redirect: false
  }

  componentDidMount() {}

  handleToggle = () => {
    this.setState({
      show: !this.state.show
    })
  }

  handleLogOut = () => {
    emit("logOut")
  }
  render() {
    const { page } = this.props
    return (
      <Fragment>
        <div>
          <ul className="main2-dashB-left-bottom-ul">
            <li className={`${page === "profile" ? "dashB-li active Link100" : "Link100"}`}>
              <Link className={`${page === "profile" ? "dashB-li Link100" : "Link100"}`} href="/dashboard/profile">
                <a>
                  <span className="main2-dashB-left-bottom-a">Konto-Details</span>
                </a>
              </Link>
            </li>
            <li className={`${page === "order" ? "dashB-li active Link100" : "Link100"}`}>
              <Link className={`${page === "order" ? "dashB-li Link100" : "Link100"}`} href="/dashboard/order">
                <a>
                  <span className="main2-dashB-left-bottom-a">Bestellungen</span>
                </a>
              </Link>
            </li>
            <li className={`${page === "order" ? "dashB-li active Link100" : "Link100"}`}>
              <Link className={`${page === "order" ? "dashB-li Link100" : "Link100"}`} href="/dashboard/support">
                <a>
                  <span className="main2-dashB-left-bottom-a">Anfrage</span>
                </a>
              </Link>
            </li>
            <li className={`${page === "address" ? "dashB-li active Link100" : "Link100"}`}>
              <Link className={`${page === "address" ? "dashB-li Link100" : "Link100"}`} href="/dashboard/address">
                <a>
                  <span className="main2-dashB-left-bottom-a">Lieferadresse</span>
                </a>
              </Link>
            </li>
            {/* <li id="middle2-3">
              <span onClick={this.handleLogOut} className="main2-dashB-left-bottom-a">
                Ausloggen
              </span>
            </li> */}
          </ul>
        </div>
      </Fragment>
    )
  }
}
