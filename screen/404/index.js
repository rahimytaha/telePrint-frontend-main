/** @format */

import Link from "next/link"
import React, { Component } from "react"

//api

export default class gride extends Component {
  state = {
    category: [{ label: "", value: "" }],
    data: [],
    brand: [],
    brandId: [],
    show: false,
    showBrand: false
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

  handleMapClick = () => {
    const address = encodeURIComponent("TELEprint Digitaldruck KG")
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`

    // Open the Google Maps URL in a new tab
    window.open(googleMapsUrl, "_blank")
  }

  render() {
    return (
      <main className="body404">
        <div className="graphic404">
          <div className="box404 cyan404"></div>
          <div className="box404 magenta404"></div>
          <div className="box404 yellow404"></div>
          <div className="box404 black404"></div>
        </div>

        <h1>404</h1>
        <p>Die Seite konnte nicht gefunden werden.</p>
        <div className="login-btn">
          <Link href="/">
            <button>Home</button>
          </Link>
        </div>
      </main>
    )
  }
}
