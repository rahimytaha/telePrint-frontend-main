/* eslint-disable @next/next/no-img-element */
/** @format */

import React, { Component } from "react"
import { Loader } from "rsuite"
//api

import Image from "next/image"
import { cart } from "../../../../api/Api"
import { emit } from "jetemit"
//components
export default class gride extends Component {
  state = {}

  renderOrder = () => {
    const { orderData, loadingOrder } = this.props
    if (loadingOrder) {
      return (
        <div className="flex-center w-100">
          <div className="cart__product-item-details w-90 flex-space-btw flex-center">
            {" "}
            <Loader />{" "}
          </div>
        </div>
      )
    }

    return orderData && orderData.length
      ? orderData.map((x) => {
          return (
            <div className="flex-center w-100" key={Math.random()}>
              <div className="cart__product-item-details w-90 flex-space-btw">
                <div className="cart__product-items-content-first flex">
                  <div className="cart__product-items-picture">
                    <img src={x.icon} alt="Icon" />
                  </div>
                  <div className="cart__product-items-name">{x.productName}</div>
                </div>

                <div className="cart__item-quantity cart__product-items-content-second flex-space-btw">
                  {/* <div className="plus-quantity">+</div> */}
                  {x?.tableId?.count}
                  {/* <div className="minus-quantity">_</div> */}
                </div>
                <div className="cart__product-items-content-second textAlignLeft">
                  {" "}
                  <span>{x?.tableId?.finalPrice} </span> Euro
                </div>
                <div className="cart__individual-number cart__product-items-content-second  flex-center" style={{ width: "7.5%" }}>
                  {x.tableId && x.tableId.file1 ? (
                    <a className="aaa" rel="noreferrer" target="_blank" href={x.tableId && x.tableId.file1}>
                      <i className="mdi mdi-download"></i>
                    </a>
                  ) : (
                    ""
                  )}
                  {x.tableId && x.tableId.file2 ? (
                    <a className="aaa" rel="noreferrer" target="_blank" href={x.tableId && x.tableId.file2}>
                      <i className="mdi mdi-download"></i>
                    </a>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  onClick={() => this.handleDelete(x._id)}
                  style={{ cursor: "pointer", display: "flex", justifyContent: "center", marginRight: "5%" }}
                  className=" cart__product-items-content-second"
                >
                  <i className="mdi mdi-delete-forever-outline"></i>{" "}
                </div>
              </div>
            </div>
          )
        })
      : ""
  }
  handleDelete = async (id) => {
    try {
      const { status } = await cart.deleteOrder(id)
      if (status === 200) {
        this.props.getOrder()
        emit("order")
      }
    } catch (error) {
      console.error(error)
    }
  }
  render() {
    const { step, orderData } = this.props
    return (
      <main>
        <div className="flex-center w-100">
          <div className="cart__product-items w-90 flex-space-btw">
            <div className="cart__product-items-title cart__product-items-title-first">Produktname</div>

            <div className="cart__product-items-title cart__product-items-title-second">Stückzahl</div>
            <div className="cart__product-items-title cart__product-items-title-second">Gesamtpreis</div>
            <div className="cart__product-items-title cart__product-items-title-second">Files</div>
            <div className="cart__product-items-title cart__product-items-title-second">Entfernen</div>
          </div>
        </div>
        {this.renderOrder()}
      </main>
    )
  }
}
