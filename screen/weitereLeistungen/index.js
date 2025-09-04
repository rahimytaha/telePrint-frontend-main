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
            <h1 className="title-box">Weitere Leistungen</h1>
            <ul>
              <li>Papierverkauf blattweise von allen unseren gängigen Papiersorten.</li>
              <li>Papierverkauf packungsweise von allen unseren gängigen Papiersorten.</li>
              <li>Aufkaschieren auf Weichschaumplatte / Kappaplatte in 5 mm Stärke bis 70 x 100 cm.</li>
              <li>Aufkaschieren auf Weichschaumplatte / Kappaplatte in 10 mm Stärke bis 100 x 140 cm.</li>
              <li>Aufkaschieren auf Hartschaumplatte in 5 mm Stärke bis 70 x 100 cm.</li>
              <li>Aufkaschieren auf Alu Dibondplatte in 4 mm Stärke bis 70 x 100 cm.</li>
              <li>Schutzlaminat für Plakate bis 135 cm Breite matt oder glänzend.</li>
              <li>Cellophanieren matt oder glänzend bis zum Format SRA3.</li>
              <li>Laminieren (Einschweißen) matt oder glänzend von A7 bis A3.</li>
              <li>Rückenbandbindung.</li>
              <li>Buchbindung in Leinen inkl. Prägeschrift.</li>
              <li>Erstellen von Layouts nach Ihren Wünschen.</li>
              <li>Textildruck auf beigestellte Textilien.</li>
              <li>Rillen alle Formate bis A3.</li>
              <li>Perforieren alle Formate bis A3.</li>
              <li>Zuschneiden bis zum Format 50 x 70 cm.</li>
              <li>Lochen 2-er oder 4-er Lochung.</li>
              <li>Ecken abrunden.</li>
              <li>Metallspiralen weiß schwarz silbern A7 bis A3 quer bis ca. 350 Blatt.</li>
              <li>Heften maschinell bis 100 Blatt.</li>
              <li>Sattelheftung.</li>
              <li>Taschenbuchbindung.</li>
              <li>Abreißblöcke geleimt.</li>
              <li>Stempel in allen gängigen Formaten.</li>
            </ul>
          </div>
        </div>
      </main>
    )
  }
}

export default withRouter(gride)
