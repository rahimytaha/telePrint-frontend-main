/* eslint-disable @next/next/no-img-element */
import React, { Component, Fragment } from "react"
import { Button, Dropdown, Icon, IconButton, Pagination } from "rsuite"
import Sidebar from "../sidbar"

import { cart } from "../../../../api/Api"
import moment from "moment"
import Link from "next/link"

const { NEXT_PUBLIC_API_URL } = process.env
// import { setAuthToken } from "../../../../api/_api";
export default class gride extends Component {
  state = {
    shownStatus: "Status",
    show: false,
    status: [],
    orders: [],
    page: "order",
    thisPage: 1,
    limit: 10,
    sort: { createdAt: -1 },
    metaData: {}
  }

  componentDidMount() {
    this.getStatus()
  }

  getOrder = async (statusCode) => {
    try {
      // const token =
      //   localStorage.getItem("token") && localStorage.getItem("token");
      // setAuthToken(token);

      const newValue = {
        page: this.state.thisPage,
        limit: this.state.limit,
        sort: this.state.sort,
        condition: {
          statusCode: statusCode
        }
      }
      const { data, status } = await cart.getAll(newValue)
      if (status !== 200) {
        this.setState({ orders: [] })
        return
      }
      this.setState({ orders: data.data })
    } catch (error) {
      console.error(error)
    }
  }
  handlePagination = async (page) => {
    await this.setState({ thisPage: page })
    this.getOrder()
  }
  getMeta = async (statusCode) => {
    try {
      const newValue = {
        page: this.state.thisPage,
        limit: this.state.limit,
        sort: this.state.sort,
        condition: {
          statusCode: statusCode
        }
      }
      const { data, status } = await cart.getAllMeta(newValue)
      if (status !== 200) {
        this.setState({ orders: [] })
        return
      }
      this.setState({ metaData: data.metaData })
    } catch (error) {
      console.error(error)
    }
  }

  getStatus = async () => {
    const { data } = await cart.getStatusOrder()
    this.setState({
      status: data.data
    })
    this.getOrder(data.data[0].value)
    this.getMeta(data.data[0].value)
  }

  handleSelect = (status) => {
    this.setState({
      shownStatus: status
    })
    this.getOrder(status)
  }
  LeafletCard = ({ cart }) => {
    const { orderItems } = cart
    return (
      <div className="leaflet-card">
        <div className="leaflet-card-items">
          {orderItems.map((item, i) => {
            const file1 = item?.tableId.file1
            const file2 = item?.tableId.file2
            return (
              <div className={`card-item ${orderItems.length !== i + 1 ? "card-item-border" : ""} `} key={i}>
                <img src={item.icon} alt="Leaflet" className="leaflet-image" />
                <div className="leaflet-details">
                  <h4>{item.productName}</h4>
                  <ul>
                    <li>Auflage: {item?.tableId?.count} Stk.</li>
                    <li>Bestell-Nr.: {cart?.invoiceId && cart?.invoiceId?.invoiceNumber ? `R-${cart?.invoiceId?.invoiceNumber}` : ``}</li>
                    {file1 ? (
                      <li>
                        file1:
                        <a className="aaa" rel="noreferrer" target="_blank" href={file1}>
                          <i className="mdi mdi-download"></i>
                        </a>
                      </li>
                    ) : (
                      ""
                    )}
                    {file2 ? (
                      <li>
                        file2:
                        <a className="aaa" rel="noreferrer" target="_blank" href={file2}>
                          <i className="mdi mdi-download"></i>
                        </a>
                      </li>
                    ) : (
                      ""
                    )}
                    <li>Eingangsdatum: {moment(cart.createdAt).format("DD/MM/YYYY")} </li>
                    <li className="panel_status">Auftragsstatus: {cart?.statusId?.du_name}</li>
                  </ul>
                </div>
                <span>
                  {i === 0 ? (
                    <IconButton onClick={() => this.downloadPdf(cart.id)} icon={<Icon icon="file-pdf-o" />} placement="left" color="blue">
                      Download invoice
                    </IconButton>
                  ) : (
                    ""
                  )}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  downloadPdf = async (id) => {
    try {
      const token = localStorage.getItem("token")
      // Ensure the response is fetched as an arraybuffer
      const response = await fetch(`${NEXT_PUBLIC_API_URL}/client/v1/Cart/invoice/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const fileBlob = await response.blob()
      const url = window.URL.createObjectURL(fileBlob) // Create a downloadable URL from the Blob

      // Dynamically create an anchor element
      const a = document.createElement("a")
      a.href = url
      a.download = "invoice.pdf" // Specify the filename
      document.body.appendChild(a) // Append the anchor to the DOM
      a.click() // Programmatically click the anchor to trigger the download
      document.body.removeChild(a) // Remove the anchor from the DOM

      window.URL.revokeObjectURL(url) // Revoke the Blob URL to free memory
    } catch (error) {
      console.error("Error downloading PDF:", error) // Handle errors
    }
  }
  render() {
    const { status, shownStatus, orders, page, metaData } = this.state

    return (
      <Fragment>
        <main>
          <div className="main2-dashB flex-j-c w-100">
            <div className="main2-dashB-dad w-90">
              <div className="main2-dashB-left">
                <Sidebar page={page} />
              </div>
              <div className="main2-add-right min-height-60 flex-col">
                <table>
                  <thead>
                    <th className="best-table-num">
                      <Pagination
                        prev
                        last
                        next
                        first
                        ellipsis
                        size="md"
                        maxButtons={5}
                        pages={metaData.totalPages}
                        onSelect={this.handlePagination}
                        activePage={this.state.thisPage}
                      />{" "}
                    </th>
                    <th className="best-table-status">
                      <Dropdown title={shownStatus}>
                        {status.length
                          ? status.map((x) => {
                              return (
                                <Dropdown.Item key={Math.random()} onSelect={() => this.handleSelect(x.value)}>
                                  {x.label}
                                </Dropdown.Item>
                              )
                            })
                          : ""}
                      </Dropdown>
                    </th>
                  </thead>
                  <tbody>
                    {orders.length ? (
                      orders.map((cart) => {
                        return <this.LeafletCard cart={cart} key={Math.random()} />
                      })
                    ) : (
                      <div className="flex-j-c">
                        <div>there is no order</div>
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </Fragment>
    )
  }
}
