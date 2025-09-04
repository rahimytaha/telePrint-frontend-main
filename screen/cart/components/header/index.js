/** @format */

import React, { Component } from "react";
//api

//components
export default class gride extends Component {
  state = {};

  render() {
    const { step } = this.props;
    return (
      <main>
        <div className="cart-header">
          <div
            className={`cart-header__container ${
              step === 1 ? "cart-header__container-select" : ""
            }`}
          >
            <div className="cart-header__icon">
              <i className="mdi mdi-cart-outline"></i>
            </div>
            <div className="cart-header__title">Zahlungsbestätigung</div>
          </div>

          <div className="cart-header__split-dots">......</div>

          <div
            className={`cart-header__container ${
              step === 2 ? "cart-header__container-select" : ""
            }`}
          >
            <div className="cart-header__icon">
              <i className="mdi mdi-map-marker-outline"></i>
            </div>
            <div className="cart-header__title">
              Wählen Sie die Versandart aus
            </div>
          </div>

          <div className="cart-header__split-dots">......</div>

          <div
            className={`cart-header__container ${
              step === 3 ? "cart-header__container-select" : ""
            }`}
          >
            <div className="cart-header__icon">
              <i className="mdi mdi-credit-card-outline"></i>
            </div>
            <div className="cart-header__title">Warenkorb vervollständigen</div>
          </div>
        </div>
      </main>
    );
  }
}
