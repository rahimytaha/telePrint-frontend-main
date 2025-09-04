/** @format */

import React, { Component } from "react"
//api
import { withRouter } from "next/router"

import {
  Button,
  Input,
  Form,
  Notification,
  Schema,
  Progress,
  // Checkbox,
  // CheckboxGroup,
} from "rsuite"
const { StringType, NumberType } = Schema.Types
const model = Schema.Model({
  // email: StringType()
  //   .isEmail("Please enter a valid email address.")
  //   .isRequired("This field is required."),
  firstName: StringType().isRequired("firstName is required."),
  lastName: StringType().isRequired("lastName is required."),
  email: StringType().isRequired("email is required."),
  phoneNumber: NumberType().isRequired("phoneNumber is required."),
})
class gride extends Component {
  state = {
    show: false,
    loading: false,
    progress: false,
    percent: 0,
    initialValue: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      file1: "",
      file2: "",
      product: this.props?.props?.router?.query?.name ? this.props?.props?.router?.query?.name : "",
      description: "",
    },
    formError: {},
    redirect: false,
    loadingButtom: false,
    loading2: false,
    loading1: false,
    src1: "",
    src2: "",
    productName: this.props?.props?.router?.query?.name ? this.props?.props?.router?.query?.name : "",
  }

  render() {
    return (
      <main>
        <div className="main-page">
          <div className="main-container">
            <h1>Versand- und Lieferbedingungen</h1>

            <p>
              Wir produzieren Ihren Auftrag je nach Umfang und Ihrem Wunsch Express innerhalb von 24 Stunden oder innerhalb von drei Werktagen. Bei
              größeren Auflagen oder komplizierten Sonderwünschen behalten wir uns eine Verlängerung der Produktionszeit auf fünf Werktage vor. Falls
              dies der Fall ist werden wir Sie sofort nach dem Eingang Ihres Auftrages informieren. Sobald Ihr Druckauftrag fertig gestellt ist werden
              Sie umgehend von uns benachrichtigt.
            </p>

            <h2>Nach Fertigstellung Ihres Druckauftrag stehen mehrere Optionen zur Auswahl:</h2>

            <h3>Persönliche Abholung in 1070 Wien</h3>
            <p>
              Ihren fertige Druckauftrag können Sie jederzeit persönlich in unserem Shop an der Westbahnstraße 9 (Ecke Bandgasse) im 7. Wiener
              Gemeindebezirk abholen.
            </p>
            <div className="hours">
              <h4>Öffnungszeiten:</h4>
              <ul>
                <li>Mo – Do: 9:00 bis 18:00 Uhr</li>
                <li>Mo – Fr: 9:00 bis 19:00 Uhr</li>
                <li>Sa: 10:00 bis 17:00 Uhr</li>
              </ul>
            </div>

            <h3>Versand innerhalb Wiens per Botendienst</h3>
            <p>Innerhalb Wiens (sämtliche Bezirke) verschicken wir Ihren Druckauftrag an Ihre gewünschte Lieferadresse:</p>
            <p>Expressversand per Boten (Fahrrad oder Taxi): Lieferzeit: 2 – 4 Arbeitsstunden Mo 9:00 – Fr 19:00 Uhr</p>

            <h3>Versand innerhalb Österreichs per Hermes Paketdienst</h3>
            <p>
              Innerhalb Österreichs (sämtliche Bundesländer) verschicken wir Ihren Druckauftrag mit Hermes Paketdienst an Ihre gewünschte
              Lieferadresse:
            </p>
            <p>Hermes Paketversand in Österreich: Lieferzeit: 2 – maximal 5 Arbeitstage</p>
          </div>
        </div>
      </main>
    )
  }
}

export default withRouter(gride)
