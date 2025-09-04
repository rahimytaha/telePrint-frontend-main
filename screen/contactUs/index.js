/** @format */

import React, { Component } from "react"
//api

// import { email } from "../../api/Api"

import { Notification } from "rsuite"

export default class gride extends Component {
  state = {
    show: false,
    initialValue: {
      name: "",
      phoneNumber: "",
      text: "",
      email: ""
    }
  }

  handleChange = async (value, name) => {
    await this.setState({
      initialValue: { ...this.state.initialValue, [name]: value }
    })
  }

  open = (funcName, title, message) => {
    Notification[funcName]({
      title: title,
      description: <div>{message}</div>
    })
  }

  // handleSubmit = async () => {
  //   try {
  //     if (this.state.initialValue && this.state.initialValue.email && this.state.initialValue.email.includes("@gmail.com" || "@email.com")) {
  //       await email.contactForm(this.state.initialValue)
  //       this.open("success", "Erfolgreich", "Ihre Anfrage wurde erfolgreich eingereicht.")
  //     } else {
  //       this.open("error", "Warnung", "Bitte geben Sie eine gültige E-Mail-Adresse ein.")
  //     }
  //   } catch (error) {
  //     console.log(error)
  //     this.open("error", "Warnung", "Bitte versuchen Sie es erneut.")
  //   }
  // }

  handleMapClick = () => {
    const address = encodeURIComponent("TELEprint Digitaldruck KG")
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`

    // Open the Google Maps URL in a new tab
    window.open(googleMapsUrl, "_blank")
  }
  render() {
    return (
      <main>
        <div className="main-page">
          <div className="main-container">
            <div className="contact-content">
              <div onClick={this.handleMapClick} className="contact__map-section">
                <iframe
                  title="map"
                  className="contact-map"
                  frameborder="0"
                  allowfullscreen
                  aria-hidden="false"
                  tabindex="0"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2659.3566802409036!2d16.347488917709263!3d48.19974534843316
                                !3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x254c06a2d168d2fb!2sTELEprint%20Digitaldruck%20KG!5e0!3m2!1sde!2sat!4v15973
                                18064795!5m2!1sde!2sat"
                ></iframe>
              </div>
              <div className="contact__content-section">
                <div className="contact__title">Kontakt</div>
                <div className="contact-info-address__wraper">
                  <div className="contact-info">
                    {" "}
                    Mo – Fr <br /> 9 bis 18 Uhr{" "}
                  </div>
                  <div className="contact-address"> Westbahnstraße 9 1070 Wien </div>
                </div>
                <div className="email-section">
                  <div className="email__title"> Email </div>
                  <div className="email__info">
                    <a href="mailto:print@teleprint.at">print@teleprint.at</a>
                  </div>
                </div>
                <div className="phone-section">
                  <div className="phone__title"> Telefon </div>
                  <div className="phone__info">
                    <a href="tel:+4315243256">+43  1 524 32 56 </a>
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
