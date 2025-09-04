/** @format */

import React, { Component } from "react"
//api

//components
export default class gride extends Component {
  state = { address: "", shipment: "" }

  componentDidMount() {
    const { addressData, shipmentData, activeAddress, activeShipment } = this.props

    const address = addressData.find((x) => {
      return x.id === activeAddress
    })
    const shipment = shipmentData.find((x) => {
      return x.id === activeShipment
    })

    this.setState({
      shipment,
      address,
    })
  }

  render() {
    const { address, shipment } = this.state
    const { selectedPayment } = this.props
    return (
      <>
        <div className="cart-product__button-container flex-center w-100">
          <div className="cart-return__button flex-center"></div>
        </div>
        <div className="data-upload__title"> Lieferanschrift </div>
        <div className="w-100 flex-center">
          <div className="cart-address__info">
            <div className="cart-address__info-details">
              <div className=" flex">
                <div className="cart-address__info-title white-color"> Name des Empfängers: </div>
                <div className="cart-address__info-text white-color ">{address?.name}</div>
              </div>
              <div className="cart-address__info-text white-color margin-left-0 ">{address?.address}</div>
            </div>
            <div className="cart-address__info-details flex cart-address__info-details-bg-color">
              <div className="cart-address__info-title"> Postleitzahl: </div>
              <div className="cart-address__info-text"> {address?.postalCode} </div>
            </div>
          </div>
        </div>
        <div className="data-upload__title"> Post-Typ </div>
        <div className="w-100 flex-center">
          <div className="cart-type flex">
            <div className="cart-type__price-text"> {shipment?.du_name} </div>
            <div className="cart-type__price-number">
              {" "}
              <span> {shipment?.cost} </span> Euro{" "}
            </div>
          </div>
        </div>
        <div className="data-upload__title"> Zahlungsart </div>
        <div className="w-100 flex-center">
          <div className="cart-type flex-center">
            <div className="cart-type-container flex-space-btw">
              <div className="cart-type-container-div">
                <input onChange={() => this.props.handleSelectPayment("PayPal")} name="payment" type="radio" checked={selectedPayment === "PayPal"} />
                <div className="cart-type-container-div-child">
                  <i className="mdi mdi-card-bulleted"></i>PayPal
                </div>
              </div>
              <div className="cart-type-container-div">
                <input onChange={() => this.props.handleSelectPayment("Stripe")} name="payment" type="radio" checked={selectedPayment === "Stripe"} />
                <div className="cart-type-container-div-child">
                  <i className="mdi mdi-card-bulleted-outline"></i>Stripe
                </div>
              </div>

              <div className="cart-type-container-div">
                <input
                  onChange={() => this.props.handleSelectPayment("spotPayment")}
                  name="payment"
                  type="radio"
                  checked={selectedPayment === "spotPayment"}
                  disabled={shipment?.name === "SENDING_BY_COURIER"}
                />
                <div className="cart-type-container-div-child">
                  <i className="mdi mdi-card-bulleted-outline"></i>Zahlung vor Ort
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
