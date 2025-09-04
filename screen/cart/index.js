/* eslint-disable react/no-unknown-property */
/** @format */

import React, { Component } from "react"
import { Button, Notification, Modal, Loader } from "rsuite"
//api
import { cart, address } from "../../api/Api"
import CustomLoader from "../../components/costomLoader"
import Router from "next/router"
import PayPal from "./components/PayPal"
import { loadStripe } from "@stripe/stripe-js"
import configStripe from "../../config/stripe"
//components
import Header from "./components/header"
import Cart1 from "./components/cart1"
import Cart2 from "./components/cart2"
import Cart3 from "./components/cart3"
import { emit } from "jetemit"
const stripePromise = loadStripe(configStripe.publish_key)
export default class gride extends Component {
  state = {
    category: [{ label: "", value: "" }],
    data: [],
    brand: [],
    brandId: [],
    show: false,
    showBrand: false,
    step: 1,

    orderData: [],
    data: [],
    reduxCart: "",
    openDrawerState: false,
    openMenuState: false,
    openPayment: false,
    statusCode: 0,
    loading: false,
    orderLength: "",
    amount: 0,
    redirect: false,
    loadingOrder: false,
    activeAddress: "",
    activeShipment: "",
    orderId: "",
    selectedPayment: "PayPal",
    loadingFinalize: false,
    shipmentPrice: 0
  }

  open = (funcName, title, message) => {
    Notification[funcName]({
      title: title,
      description: <div>{message}</div>
    })
  }

  componentDidMount() {
    this.getOrder()
    this.getAddress()
    this.getShipment()
    // on("order", (order) => {
    //   this.getOrder();
    // });
    // on("logOut", () => {
    //   this.handleLogOut();
    // });
  }

  getAddress = async () => {
    try {
      const { data, status } = await address.getAll()
      if (status !== 200) {
        this.setState({ addressData: [] })
        return
      }
      this.setState({ addressData: data.data, activeAddress: data.data[0].id })
    } catch (error) {
      console.error(error)
    }
  }

  getShipment = async () => {
    try {
      const { data, status } = await address.getAllConstantShipment()
      if (status !== 200) {
        this.setState({ shipmentData: [] })
        return
      }
      this.setState({
        shipmentData: data.data,
        activeShipment: data.data[0].id
      })
    } catch (error) {
      console.error(error)
    }
  }

  getOrder = async () => {
    try {
      this.setState({ loadingOrder: true })

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
          orderId: data.data.id,
          orderData: data.data?.orderItems,
          orderLength: data.data?.orderItems.length,
          amount: amount,
          loadingOrder: false
        })
        return
      }
      if (status === 204) {
        this.setState({
          orderData: [],
          orderLength: 0,
          loadingOrder: false
        })
        return
      }
    } catch (error) {
      console.error(error)
    }
  }

  handleToggle = () => {
    this.setState({
      show: !this.state.show
    })
  }

  handleToggleBrand = () => {
    this.setState({
      showBrand: !this.state.showBrand
    })
  }

  handleChange = async (value) => {
    await this.setState({
      brandId: value
    })
  }

  handleChaneStep = async (step) => {
    if (step === 2) {
      this.setState({ step })
      return
    }

    if (step === 3) {
      this.finalize()

      return
    }

    // console.log("step", step);
    // if (step === 3) {
    //

    // }
    if (step === 4) {
      // this.setState({ handleOpenPayPal:true });
      // this.payment();
      if (this.state.selectedPayment === "PayPal") {
        this.handleOpenPayPal()
        return
      }
      if (this.state.selectedPayment === "Stripe") {
        this.handleStripePayment()

        return
      }

      if (this.state.selectedPayment === "spotPayment") {
        await cart.spotPayment()
        Router.push("/dashboard/order")
        emit("order")

        return
      }
    }
    this.setState({ step: step })
  }

  handleStripePayment = async () => {
    try {
      const { data } = await cart.stripePayment()
      const { sessionId } = data.data
      const stripe = await stripePromise
      const { error } = await stripe.redirectToCheckout({
        sessionId
      })

      if (error) {
        console.error(error.message)
      }
    } catch (error) {
      console.error(error)
    }
  }

  payment = async () => {
    try {
      const { data, status } = await cart.paypalStart()
      this.setState({ handleOpenPayPal: true })
    } catch (error) {
      console.error(error)
    }
  }
  handleSelectPayment = (value) => {
    this.setState({ selectedPayment: value })
  }
  finalize = async () => {
    this.setState({ loadingFinalize: true })
    try {
      let newValue = {
        shipmentId: this.state.activeShipment,
        shippingAddress: this.state.activeAddress,
        billingAddress: this.state.activeAddress
      }

      const { data, status } = await cart.payment(newValue, this.state.orderId)

      this.setState({ step: 3 })
      this.setState({ loadingFinalize: false })
    } catch (error) {
      console.log(error.response.data.message)
      this.open("error", "Warnung", error.response.data.message)
      console.error(error)
    }
    this.setState({ loadingFinalize: false })
  }

  handleClickAddres = (id) => {
    this.setState({ activeAddress: id })
  }

  handleClickShipment = (shipment) => {
    this.setState({ activeShipment: shipment.id, shipmentPrice: shipment.cost })
  }

  handleClosePayPal = () => {
    this.setState({ openPayPal: false })
    this.getOrder()
  }

  handleOpenPayPal = () => {
    this.setState({ openPayPal: true })
  }
  handleDeleteAll = async () => {
    try {
      const { status } = await cart.deleteAllOrder(this.state.orderId)
      if (status === 200) {
        this.getOrder()
        emit("order")

        this.open("success", "Erfolgreich", "Ihr Warenkorb wurde geleert.")
      }
    } catch (error) {
      console.error(error)
    }
  }
  render() {
    const {
      step,
      orderData,
      shipmentPrice,
      loadingOrder,
      activeAddress,
      activeShipment,
      addressData,
      shipmentData,
      amount,
      selectedPayment,
      loadingFinalize
    } = this.state
    return (
      <main>
        <Modal size={"md"} show={this.state.openPayPal} onHide={this.handleClosePayPal}>
          <Modal.Header>
            <Modal.Title>Payment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="add-to-cart__price-number">
              <span>{amount + shipmentPrice}</span> Euro
            </div>
            <PayPal
              handleClosePayPal={this.handleClosePayPal}
              handleClosePayment={this.handleClosePayment}
              amount={this.state.amount + shipmentPrice}
              closeDrawer={this.closeDrawer}
              orderId={this.state.orderId}
            />
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.handleClosePayPal} appearance="subtle">
              Abbrechen
            </button>
          </Modal.Footer>
        </Modal>
        <div className="main-page">
          <div className="main-container">
            <div className="cart-section">
              <div className="w-100">
                <Header step={step} />

                <div className="cart-product__button-container flex-center w-100">
                  <div className="cart-product__button flex-center">
                    {step !== 1 ? (
                      <div className="cart-product__add-button flex">
                        <Button onClick={() => this.handleChaneStep(step - 1)}>
                          <i className="mdi mdi-arrow-left"></i>
                          <span>Back</span>
                        </Button>
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="cart-product__delete-button flex">
                      <Button onClick={() => this.handleDeleteAll()}>
                        <i className="mdi mdi-delete-outline"></i>
                        <span>Einkaufswagen leeren</span>
                      </Button>
                    </div>
                  </div>
                </div>

                {step === 1 ? <Cart1 orderData={orderData} loadingOrder={loadingOrder} CustomLoader={CustomLoader} getOrder={this.getOrder} /> : ""}
                {step === 2 ? (
                  <Cart2
                    handleClickAddres={this.handleClickAddres}
                    handleClickShipment={this.handleClickShipment}
                    activeAddress={activeAddress}
                    activeShipment={activeShipment}
                    addressData={addressData}
                    shipmentData={shipmentData}
                    getAddress={this.getAddress}
                  />
                ) : (
                  ""
                )}
                {step === 3 ? (
                  <Cart3
                    activeAddress={activeAddress}
                    activeShipment={activeShipment}
                    addressData={addressData}
                    shipmentData={shipmentData}
                    handleSelectPayment={this.handleSelectPayment}
                    selectedPayment={selectedPayment}
                  />
                ) : (
                  ""
                )}

                <div className="add-to-cart__section flex-center w-100">
                  <div className="add-to-cart__wrapper w-90 flex-center">
                    <div className="add-to-cart__container flex-space-btw w-100">
                      <div className="add-to-cart__price-info">
                        <div className="add-to-cart__price-text">Der zu zahlende Betrag</div>
                        <div className="add-to-cart__price-number">
                          <span>{amount + shipmentPrice}</span> Euro
                        </div>
                      </div>
                      <div className="add-to-cart-button">
                        {loadingFinalize || loadingOrder ? (
                          <Button>
                            <Loader />
                          </Button>
                        ) : (
                          <Button onClick={() => this.handleChaneStep(step + 1)} disabled={orderData.length === 0}>
                            {step === 3 ? "Kostenpflichtig bestellen" : "Weiter"}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
