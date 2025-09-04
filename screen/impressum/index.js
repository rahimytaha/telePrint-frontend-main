/** @format */

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

  render() {
    return (
      <main>
        {" "}
        <div className="main-page">
          <div className="main-container">
            <main>
              <div className="main1-impressum w-100 flex-j-c">
                <div className="main1-impressum-dad w-90">
                  <div className="main1-impressum-txt1">Impressum</div>
                  <div className="main1-impressum-brdr"></div>
                  <div className="main1-impressum-txt2">
                    Informationspflicht laut § 5 E-Commerce Gesetz, § 14 Unternehmensgesetzbuch, § 63 Gewerbeordnung und Offenlegungspflicht laut § 25
                    Mediengesetz.
                  </div>
                  <div className="main1-impressum-txt3">TELEprint Digitaldruck KG</div>
                  <div className="main1-impressum-txt4">A-1070 Wien, Westbahnstraße 9</div>
                  <div className="main1-impressum-txt5">
                    <strong>Unternehmensgegenstand: </strong>Digitaldruck & Copyshop
                  </div>
                  <div className="main1-impressum-txt5">
                    <strong>UID-Nummer: </strong>ATU 7292 0226
                  </div>
                  <div className="main1-impressum-txt5">
                    <strong>Firmenbuchnummer: </strong>479000m
                  </div>
                  <div className="main1-impressum-txt5">
                    <strong>Firmenbuchgericht: </strong>Handelsgericht Wien
                  </div>
                  <div className="main1-impressum-txt5">
                    <strong>Firmensitz: </strong>Wien
                  </div>
                  <div className="main1-impressum-txt5">
                    <strong>Tel. </strong>01 5243256
                  </div>
                  <div className="main1-impressum-txt5">
                    <strong>E-Mail: </strong>print@teleprint.at und (Administration: service@teleprint.at)
                  </div>
                  <div className="main1-impressum-txt5">
                    <strong>Mitglied bei: </strong>WKO
                  </div>
                  <div className="main1-impressum-txt5">
                    <strong>Aufsichtsbehörde/Gewerbebehörde: </strong>
                    Magistratisches Bezirksamt des VII. Bezirkes
                  </div>
                  <div className="main1-impressum-txt5">
                    <strong>Komplementär: </strong>Masoud Marvasti
                  </div>
                  <div className="main1-impressum-txt5">
                    <strong>Bildernachweis </strong> <i> Die Bilder, Fotos und Grafiken auf dieser Webseite sind urheberrechtlich geschützt.</i>
                  </div>
                  <div className="main1-impressum-txt5">
                    <strong> Die Bilderrechte </strong> <i> liegen bei den folgenden Fotografen und Unternehmen: TELEprint Digitaldruck KG</i>
                  </div>
                  {/* <div className="main1-impressum-txt6">
                <i>Freepik</i>
              </div> */}
                </div>
              </div>
            </main>
          </div>{" "}
        </div>
      </main>
    )
  }
}
