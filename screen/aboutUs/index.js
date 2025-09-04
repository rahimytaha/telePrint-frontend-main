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

  handleMapClick = () => {
    const address = encodeURIComponent("TELEprint Digitaldruck KG")
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${address}`

    // Open the Google Maps URL in a new tab
    window.open(googleMapsUrl, "_blank")
  }

  render() {
    return (
      <main>
        {" "}
        <div className="main-page">
          <div className="main-container">
            <div className="about-content">
              <div className="about__picture-section">
                <div className="about-img"></div>
                <div onClick={this.handleMapClick}>
                  <iframe
                    title="map"
                    className="about-map"
                    allowfullscreen
                    aria-hidden="false"
                    tabIndex="0"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2659.3566802409036!2d16.347488917709263!3d48.19974534843316
                                !3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x254c06a2d168d2fb!2sTELEprint%20Digitaldruck%20KG!5e0!3m2!1sde!2sat!4v15973
                                18064795!5m2!1sde!2sat"
                  ></iframe>
                </div>
              </div>
              <div className="about__text-section">
                <div className="about__title">Über uns</div>
                <div className="about__text">
                  Alles begann im Oktober 1995 mit vier gebrauchten Kopierern und der Idee, die Möglichkeiten der Telekommunikation mehr und mehr zu
                  nutzen – die TELEKOPIE war als Einzelunternehmen auf etwa 75m2 Raum geboren. In kürzester Zeit ist daraus ein Treffpunkt für
                  zahlreiche KünstlerInnen, Studierende, GrafikerInnen aber auch für kleine und große Firmen geworden.
                </div>
                <div className="about__text">
                  Wie alle anderen Unternehmen hat auch die TELEKOPIE Auf und Abs erlebt, aber interessant war dabei immer das Wachstum des
                  Unternehmens. Unsere Angebotspalette wurde laufend erweitert, neue und größere Maschinen wurden angeschafft und die Produktion
                  beschleunigt. Dies und die stetig wachsende Mitarbeiterzahl machten es notwendig, in größere Geschäftsräume zu übersiedeln. So wie
                  wir dem 7. Bezirk (unserem „Grätzl“) treu blieben, waren es auch unsere Stammkunden.
                </div>
                <div className="about__text">
                  Im Jahre 2011 war es soweit, aufgrund stürmischer Zeiten mit vielen Turbulenzen musste die TELEKOPIE® aufhören. Die MitarbeiterInnen
                  haben die Firma übernommen und daraus die zeitgemäßere und modernere TELEprint gemacht.
                </div>
                <div className="about__text">
                  Die TELEprint KG war als Mitarbeiterbeteiligungsfirma geboren. Unserer Kunden hielt uns die Treue. Der Name hatte sich geändert,
                  unser Motto blieb gleich: Wir produzieren alles, was legal ist. Soll heißen: Auch Sonderwünsche jeglicher Art werden bei uns nach
                  Möglichkeit verwirklicht. Und das wie seit jeher mit Freude und Leidenschaft für Perfektion.
                </div>
                <div className="about__text">
                  Mittlerweile verfügen wir über ca. 300 m2 und sind ein multikulturelles Team aus 5 Personen. Wir können unseren Kunden, die uns zum
                  Teil seit fast 20 Jahren treu sind, alles aus einer Hand anbieten, was uns tagtäglich viel Freude bereitet und worauf wir auch sehr
                  stolz sind.
                </div>
                <div onClick={this.handleMapClick}>
                  <iframe
                    title="map"
                    className="about-map-responsive"
                    allowfullscreen
                    aria-hidden="false"
                    tabIndex="0"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2659.3566802409036!2d16.347488917709263!3d48.19974534843316
                                !3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x254c06a2d168d2fb!2sTELEprint%20Digitaldruck%20KG!5e0!3m2!1sde!2sat!4v15973
                                18064795!5m2!1sde!2sat"
                  ></iframe>
                </div>
                <div className="contact-section">
                  <div className="contact__title">Kontakt</div>
                  <div className="contact-info-address__container">
                    <div className="contact__info">
                      {" "}
                      Mo – Fr <br /> 9 bis 18 Uhr{" "}
                    </div>
                    <div className="contact__address"> Westbahnstraße 9 1070 Wien </div>
                  </div>
                </div>
                <div className="contact__communication-ways">
                  <div className="contact__media"> print@teleprint.at </div>
                  <div className="contact__number"> +43  1 524 32 56 </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </main>
    )
  }
}
