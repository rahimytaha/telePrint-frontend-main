import React, { Component, Fragment } from "react"
import Link from "next/link"
import Router from "next/router"
import { Form, FormControl, SelectPicker, FormGroup, Schema, Notification, Loader } from "rsuite"

import Cookies from "universal-cookie"

import { account } from "../../../../../api/Api"

const { StringType, NumberType } = Schema.Types

const model_privateCustomer = Schema.Model({
  email: StringType().isEmail("Please enter a valid email address.").isRequired("This field is required."),
  // postalCode: NumberType("Please enter a valid number.").isRequired(
  //   "PLZ is required."
  // ),
  // country: StringType().isRequired("Land field is required."),
  // address: StringType().isRequired("Straße & Hausnummer field is required."),
  // city: StringType().isRequired("Ort field is required."),
  customertype: StringType().isRequired("Privat-/Geschäftskunde is required."),
  firstName: StringType().isRequired("Vorname is required."),
  lastName: StringType().isRequired("Nachname is required."),
  phoneNumber: StringType().isRequired("Telefonnummer is required.")
})

const model_businessCustomer = Schema.Model({
  email: StringType().isEmail("Please enter a valid email address.").isRequired("This field is required."),
  postalCode: NumberType("Please enter a valid number.").isRequired("PLZ is required."),
  customertype: StringType().isRequired("Privat-/Geschäftskunde is required."),
  country: StringType().isRequired("Land field is required."),
  address: StringType().isRequired("Straße & Hausnummer field is required."),
  city: StringType().isRequired("Ort field is required."),
  phoneNumber: StringType().isRequired("Telefonnummer is required."),
  company: StringType().isRequired("Firma is required."),
  industry: StringType().isRequired("Branche is required.")
})

const model_partner = Schema.Model({
  email: StringType().isEmail("Please enter a valid email address.").isRequired("This field is required."),
  postalCode: NumberType("Please enter a valid number.").isRequired("PLZ is required."),
  customertype: StringType().isRequired("Privat-/Geschäftskunde is required."),
  country: StringType().isRequired("Land field is required."),
  address: StringType().isRequired("Straße & Hausnummer field is required."),
  city: StringType().isRequired("Ort field is required."),
  phoneNumber: StringType().isRequired("Telefonnummer is required."),
  company: StringType().isRequired("Firma is required."),
  industry: StringType().isRequired("Branche is required.")
})
const model_association = Schema.Model({
  email: StringType().isEmail("Please enter a valid email address.").isRequired("This field is required."),
  postalCode: NumberType("Please enter a valid number.").isRequired("PLZ is required."),
  customertype: StringType().isRequired("Privat-/Geschäftskunde is required."),
  country: StringType().isRequired("Land field is required."),
  address: StringType().isRequired("Straße & Hausnummer field is required."),
  city: StringType().isRequired("Ort field is required."),
  phoneNumber: StringType().isRequired("Telefonnummer is required."),
  phoneNumber: StringType().isRequired("Telefonnummer is required."),
  chairman: StringType().isRequired("Obmann/Obfrau is required."),
  Association: StringType().isRequired("Name Ihres Vereins is required.")
})
export default class Rigester extends Component {
  state = {
    loading: false,
    customertype: [
      {
        label: "Privatkunde",
        value: "Privatkunde"
      },
      { label: "Busineskunde", value: "Busineskunde" },
      // { label: "Partner", value: "Partner" },
      { label: "Verband,Verein", value: "Verband,Verein" }
      // { label: "Behörde, Öffentliche Einrichtung", value: "Authority" },
    ],
    industry: [
      {
        label: "Automobil",
        value: "Automobil"
      },
      { label: "Bauwesen", value: "Bauwesen" },
      { label: "Beauty, Wellness", value: "Beauty, Wellness" },
      { label: "Charity", value: "Charity" },
      { label: "Druckerei", value: "Druckerei" },
      {
        label: "Forschung und Entwicklung, Wissenschaft und Lehre",
        value: "Forschung und Entwicklung, Wissenschaft und Lehre"
      },
      { label: "Freiberufler", value: "Freiberufler" },
      { label: "Gastronomie", value: "Gastronomie" },
      {
        label: "Gesundheit, Medizin und Soziales ",
        value: "Gesundheit, Medizin und Soziales "
      },

      { label: "Grafiker", value: "Grafiker" },
      { label: "Handel, Vertrieb", value: "Handel, Vertrieb" },
      { label: "Handwerk", value: "Handwerk" },
      { label: "Industrie", value: "Industrie" },
      { label: "Kommunikation", value: "Kommunikation" },
      { label: "Kunst und Kultur", value: "Kunst und Kultur" },
      {
        label: "Land-, Forstwirtschaft und Umwelt",
        value: "Land-, Forstwirtschaft und Umwelt"
      },
      { label: "Maschinenbau", value: "Maschinenbau" },
      {
        label: "Medien, Marketing und Werbung",
        value: "Medien, Marketing und Werbung"
      },
      { label: "Recht", value: "Recht" },
      { label: "Sport", value: "Sport" },
      { label: "Technik, Elektronik ", value: "Technik, Elektronik " },
      { label: "Tourismus", value: "Tourismus" },
      {
        label: "Veranstalter, Eventagentur",
        value: "Veranstalter, Eventagentur"
      },
      { label: "Verlag", value: "Verlag" },
      { label: "Versicherungen", value: "Versicherungen" },
      { label: "Werbeagentur", value: "Werbeagentur" },
      { label: "Sonstige", value: "Sonstige" }
    ],
    gender: [
      {
        label: "Frau",
        value: "woman"
      },
      { label: "Herr", value: "Man" }
    ],
    country: [
      {
        label: "Österreich",
        value: "Österreich"
      }
      // { label: "Belgien", value: "Belgien" },
      // { label: "Bulgarien", value: "Bulgarien" },
      // { label: "Dänemark", value: "Dänemark" },
      // { label: "Deutschland", value: "Deutschland" },
      // { label: "Estland", value: "Estland" },
      // { label: "Frankreich", value: "Frankreich" },
      // { label: "Griechenland", value: "Griechenland" },
      // { label: "Irland", value: "Irland" },
      // { label: "Italien", value: "Italien" },
      // { label: "Kroatien", value: "Kroatien" },
      // { label: "Liechtenstein", value: "Liechtenstein" },
      // { label: "Luxemburg", value: "Luxemburg" },
      // { label: "Niederlande", value: "Niederlande" },
      // { label: "Polen", value: "Polen" },
      // { label: "Rumänien", value: "Rumänien" },
      // { label: "Schweden", value: "Schweden" },
      // { label: "Slowakei", value: "Slowakei" }
    ],
    countryPartner: [
      {
        label: "Österreich",
        value: "Österreich"
      }
    ],
    formError: {},
    initialValue: {
      customertype: localStorage.getItem("personalData") ? JSON.parse(localStorage.getItem("personalData")).customertype : "Privatkunde",
      firstName: localStorage.getItem("personalData") && JSON.parse(localStorage.getItem("personalData")).firstName,
      lastName: localStorage.getItem("personalData") && JSON.parse(localStorage.getItem("personalData")).lastName,
      postalCode: localStorage.getItem("personalData") && JSON.parse(localStorage.getItem("personalData")).postalCode,
      country: localStorage.getItem("personalData") && JSON.parse(localStorage.getItem("personalData")).country,
      email: localStorage.getItem("personalData") && JSON.parse(localStorage.getItem("personalData")).email,
      gender: localStorage.getItem("personalData") && JSON.parse(localStorage.getItem("personalData")).gender,
      city: localStorage.getItem("personalData") && JSON.parse(localStorage.getItem("personalData")).city,
      address: localStorage.getItem("personalData") && JSON.parse(localStorage.getItem("personalData")).address,
      phoneNumber: localStorage.getItem("personalData") && JSON.parse(localStorage.getItem("personalData")).phoneNumber,
      company: localStorage.getItem("personalData") && JSON.parse(localStorage.getItem("personalData")).company,
      industry: localStorage.getItem("personalData") && JSON.parse(localStorage.getItem("personalData")).industry,
      UID_Nummer: localStorage.getItem("personalData") && JSON.parse(localStorage.getItem("personalData")).UID_Nummer,
      Association: localStorage.getItem("personalData") && JSON.parse(localStorage.getItem("personalData")).Association,

      AssociationNumber: localStorage.getItem("personalData") && JSON.parse(localStorage.getItem("personalData")).AssociationNumber,

      chairman: localStorage.getItem("personalData") && JSON.parse(localStorage.getItem("personalData")).chairman
    }
  }

  cleanContentTypeDetails = () => {
    this.setState({
      formError: {},
      initialValue: {
        ...this.state.initialValue,

        company: "",
        industry: "",
        UID_Nummer: "",
        Association: "",
        AssociationNumber: "",
        chairman: "",
        country: this.state.initialValue.customertype === "Partner" ? "Österreich" : this.state.initialValue.country
      }
    })
  }

  open = (funcName, title, message) => {
    Notification[funcName]({
      title: title,
      description: <div style={{ color: "black" }}>{message}</div>
    })
  }
  handleSubmit = async () => {
    try {
      // if (await !this.form.check()) {
      //   console.error("Form Error");
      //   return;
      // }
      // if (await !this.form1.check()) {
      //   console.error("Form Error");
      //   return;
      // }
      this.setState({ loading: true })
      localStorage.setItem("personalData", JSON.stringify(this.state.initialValue))

      const { data, status } = await account.register(this.state.initialValue)
      if (status === 201) {
        const cookies = new Cookies()
        cookies.set("token", data.data.token)
        cookies.set("personalData", JSON.stringify(data.data))

        localStorage.setItem("token", data.data.token)
        localStorage.setItem("personalData", JSON.stringify(data.data))
        this.open("success", "Erfolgreich", "Sie sind jetzt registriert")
        Router.push("/")
        this.setState({ redirect: true })
      }
      //////
    } catch (error) {
      console.log(error)
      this.open("error", "Warnung", error.response && error.response.data && error.response.data.message)
    }
    this.setState({ loading: false })
  }

  componentDidMount() {}

  onChange = async (name, value) => {
    await this.setState({
      initialValue: { ...this.state.initialValue, [name]: value }
    })
  }

  onChangeCustomerType = async (name, value) => {
    await this.setState({
      initialValue: { ...this.state.initialValue, [name]: value }
    })
    this.cleanContentTypeDetails()
  }

  Adressdaten = () => {
    const { initialValue, gender, country, industry } = this.state
    switch (this.state.initialValue.customertype) {
      case "Busineskunde":
        return (
          <Form
            onCheck={(formError) => {
              this.setState({ formError })
            }}
            ref={(ref) => (this.form1 = ref)}
            formValue={initialValue}
            model={model_businessCustomer}
            layout="horizontal"
            fluid
          >
            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-email-outline"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      // disabled
                      // value={
                      //   localStorage.getItem("email") &&
                      //   localStorage.getItem("email")
                      // }
                      className=""
                      placeholder="Email*"
                      name="email"
                      type="text"
                      required
                      onChange={(e) => this.onChange("email", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-account"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Vorname"
                      name="firstName"
                      type="text"
                      required
                      onChange={(e) => this.onChange("firstName", e)}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-account-circle"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Nachname"
                      name="lastName"
                      type="text"
                      required
                      onChange={(e) => this.onChange("lastName", e)}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-gender-male-female"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      searchable={false}
                      onChange={(e) => this.onChange("gender", e)}
                      name="gender"
                      className=""
                      data={gender}
                      required
                      placeholder="Anrede"
                      accepter={SelectPicker}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-flag"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      searchable={false}
                      onChange={(e) => this.onChange("country", e)}
                      name="country"
                      className=""
                      errorMessage={this.state.formError.country}
                      data={country}
                      required
                      placeholder="Bitte auswählen"
                      accepter={SelectPicker}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-email-outline"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      searchable={false}
                      onChange={(e) => this.onChange("industry", e)}
                      name="industry"
                      className=""
                      errorMessage={this.state.formError.industry}
                      data={industry}
                      required
                      placeholder="Bitte auswählen"
                      accepter={SelectPicker}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-card-account-details-outline"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="PLZ*"
                      name="postalCode"
                      type="text"
                      required
                      onChange={(e) => this.onChange("postalCode", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-google-maps"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Ort*"
                      name="city"
                      type="text"
                      required
                      onChange={(e) => this.onChange("city", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-home-city"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Straße & Hausnummer *"
                      name="address"
                      type="text"
                      required
                      onChange={(e) => this.onChange("address", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-phone"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Telefonnummer*"
                      name="phoneNumber"
                      type="number"
                      required
                      onChange={(e) => this.onChange("phoneNumber", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-email-outline"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="UID-Nummer"
                      name="UID_Nummer"
                      type="text"
                      required
                      onChange={(e) => this.onChange("UID_Nummer", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-email-outline"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Firma"
                      name="company"
                      type="text"
                      required
                      onChange={(e) => this.onChange("company", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-lock"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Password*"
                      name="password"
                      type="text"
                      required
                      onChange={(e) => this.onChange("password", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-lock"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Repeated Password*"
                      name="repeatedPassword"
                      type="text"
                      required
                      onChange={(e) => this.onChange("repeatedPassword", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
          </Form>
        )
      case "Partner":
        return (
          <Form
            onCheck={(formError) => {
              this.setState({ formError })
            }}
            ref={(ref) => (this.form1 = ref)}
            formValue={initialValue}
            model={model_partner}
            layout="horizontal"
            fluid
          >
            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-email-outline"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      // disabled
                      // value={
                      //   localStorage.getItem("email") &&
                      //   localStorage.getItem("email")
                      // }
                      className=""
                      placeholder="Email*"
                      name="email"
                      type="text"
                      required
                      onChange={(e) => this.onChange("email", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-account"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Vorname"
                      name="firstName"
                      type="text"
                      required
                      onChange={(e) => this.onChange("firstName", e)}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-account-circle"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Nachname"
                      name="lastName"
                      type="text"
                      required
                      onChange={(e) => this.onChange("lastName", e)}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-gender-male-female"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      searchable={false}
                      onChange={(e) => this.onChange("gender", e)}
                      name="gender"
                      className=""
                      data={gender}
                      required
                      placeholder="Anrede"
                      accepter={SelectPicker}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-flag"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      searchable={false}
                      onChange={(e) => this.onChange("country", e)}
                      name="country"
                      className=""
                      errorMessage={this.state.formError.country}
                      data={country}
                      required
                      placeholder="Bitte auswählen"
                      accepter={SelectPicker}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-email-outline"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      searchable={false}
                      onChange={(e) => this.onChange("industry", e)}
                      name="industry"
                      className=""
                      errorMessage={this.state.formError.industry}
                      data={industry}
                      required
                      placeholder="Bitte auswählen"
                      accepter={SelectPicker}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-card-account-details-outline"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="PLZ*"
                      name="postalCode"
                      type="text"
                      required
                      onChange={(e) => this.onChange("postalCode", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-google-maps"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Ort*"
                      name="city"
                      type="text"
                      required
                      onChange={(e) => this.onChange("city", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-home-city"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Straße & Hausnummer *"
                      name="address"
                      type="text"
                      required
                      onChange={(e) => this.onChange("address", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-phone"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Telefonnummer*"
                      name="phoneNumber"
                      type="number"
                      required
                      onChange={(e) => this.onChange("phoneNumber", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-email-outline"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="UID-Nummer"
                      name="UID_Nummer"
                      type="text"
                      required
                      onChange={(e) => this.onChange("UID_Nummer", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-email-outline"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Firma"
                      name="company"
                      type="text"
                      required
                      onChange={(e) => this.onChange("company", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-lock"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Password*"
                      name="password"
                      type="text"
                      required
                      onChange={(e) => this.onChange("password", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-lock"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Repeated Password*"
                      name="repeatedPassword"
                      type="text"
                      required
                      onChange={(e) => this.onChange("repeatedPassword", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
          </Form>
        )
      case "Verband,Verein":
        return (
          <Form
            onCheck={(formError) => {
              this.setState({ formError })
            }}
            ref={(ref) => (this.form1 = ref)}
            formValue={initialValue}
            model={model_association}
            layout="horizontal"
            fluid
          >
            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-email-outline"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      // disabled
                      // value={
                      //   localStorage.getItem("email") &&
                      //   localStorage.getItem("email")
                      // }
                      className=""
                      placeholder="Email*"
                      name="email"
                      type="text"
                      required
                      onChange={(e) => this.onChange("email", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-email-outline"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Obmann/Obfrau"
                      name="chairman"
                      type="text"
                      required
                      onChange={(e) => this.onChange("chairman", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-gender-male-female"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      searchable={false}
                      onChange={(e) => this.onChange("gender", e)}
                      name="gender"
                      className=""
                      data={gender}
                      required
                      placeholder="Anrede"
                      accepter={SelectPicker}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-flag"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      searchable={false}
                      onChange={(e) => this.onChange("country", e)}
                      name="country"
                      className=""
                      errorMessage={this.state.formError.country}
                      data={country}
                      required
                      placeholder="Bitte auswählen"
                      accepter={SelectPicker}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-card-account-details-outline"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="PLZ*"
                      name="postalCode"
                      type="text"
                      required
                      onChange={(e) => this.onChange("postalCode", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-google-maps"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Ort*"
                      name="city"
                      type="text"
                      required
                      onChange={(e) => this.onChange("city", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-home-city"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Straße & Hausnummer *"
                      name="address"
                      type="text"
                      required
                      onChange={(e) => this.onChange("address", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-phone"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Telefonnummer*"
                      name="phoneNumber"
                      type="number"
                      required
                      onChange={(e) => this.onChange("phoneNumber", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-email-outline"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Vereinsnummer"
                      name="AssociationNumber"
                      type="text"
                      required
                      onChange={(e) => this.onChange("AssociationNumber", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-email-outline"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Name Ihres Vereins*"
                      name="Association"
                      type="text"
                      required
                      onChange={(e) => this.onChange("Association", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-lock"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Password*"
                      name="password"
                      type="text"
                      required
                      onChange={(e) => this.onChange("password", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-lock"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Repeated Password*"
                      name="repeatedPassword"
                      type="text"
                      required
                      onChange={(e) => this.onChange("repeatedPassword", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
          </Form>
        )

      default:
        return (
          <Form
            onCheck={(formError) => {
              this.setState({ formError })
            }}
            ref={(ref) => (this.form1 = ref)}
            formValue={initialValue}
            model={model_privateCustomer}
            layout="horizontal"
            fluid
          >
            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-email-outline"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      // disabled
                      // value={
                      //   localStorage.getItem("email") &&
                      //   localStorage.getItem("email")
                      // }
                      className=""
                      placeholder="Email*"
                      name="email"
                      type="text"
                      required
                      onChange={(e) => this.onChange("email", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-account"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Vorname"
                      name="firstName"
                      type="text"
                      required
                      onChange={(e) => this.onChange("firstName", e)}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-account-circle"></i>
                </div>

                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Nachname"
                      name="lastName"
                      type="text"
                      required
                      onChange={(e) => this.onChange("lastName", e)}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-gender-male-female"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      searchable={false}
                      onChange={(e) => this.onChange("gender", e)}
                      name="gender"
                      className=""
                      data={gender}
                      required
                      placeholder="Anrede"
                      accepter={SelectPicker}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-flag"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      searchable={false}
                      onChange={(e) => this.onChange("country", e)}
                      name="country"
                      className=""
                      errorMessage={this.state.formError.country}
                      data={country}
                      required
                      placeholder="Bitte auswählen"
                      accepter={SelectPicker}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-card-account-details-outline"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="PLZ"
                      name="postalCode"
                      type="text"
                      required
                      onChange={(e) => this.onChange("postalCode", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-google-maps"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Ort"
                      name="city"
                      type="text"
                      required
                      onChange={(e) => this.onChange("city", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-home-city"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Straße & Hausnummer"
                      name="address"
                      type="text"
                      required
                      onChange={(e) => this.onChange("address", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-phone"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Telefonnummer*"
                      name="phoneNumber"
                      type="number"
                      required
                      onChange={(e) => this.onChange("phoneNumber", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-lock"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Password*"
                      name="password"
                      type="text"
                      required
                      onChange={(e) => this.onChange("password", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="flex-j-c w-100">
              <div className="login-input flex">
                <div className="input-icons">
                  <i className="mdi mdi-lock"></i>
                </div>
                <div className="input-text">
                  <FormGroup className="input-text-form-wrapper">
                    <FormControl
                      className=""
                      placeholder="Repeated Password*"
                      name="repeatedPassword"
                      type="text"
                      required
                      onChange={(e) => this.onChange("repeatedPassword", e)}
                      style={{ width: "100%" }}
                    />
                  </FormGroup>
                </div>
              </div>
            </div>
          </Form>
        )
    }
  }

  render() {
    const { redirect, customertype, initialValue, loading } = this.state
    return (
      <Fragment>
        <main>
          {loading ? <Loader backdrop center content="loading" /> : ""}
          <div className="login-page w-100 flex-j-c">
            <div className="login-container w-100 flex-j-s">
              <div className="left-items w-50 flex-j-c">
                <div className="left-items--text-container">
                  <div className="left-items--title flex-j-c">
                    <span>
                      <Link href="/">
                        {/* <Logo /> */}
                        HOME
                      </Link>
                    </span>
                  </div>
                  <div className="left-items--content">Willkommen bei TELEPRINT!</div>
                </div>
              </div>
              <div className="right-items w-50 flex-j-c">
                <div className="right-items--container">
                  <div className="login-account-rigester-icon flex-j-c w-100">
                    <i className="mdi mdi-account"></i>
                  </div>

                  <div className="right-items--text">Rigester below to get started.</div>

                  <Form
                    onCheck={(formError) => {
                      this.setState({ formError })
                    }}
                    ref={(ref) => (this.form = ref)}
                    formValue={initialValue}
                    // model={model}
                    layout="horizontal"
                    fluid
                  >
                    <div className="flex-j-c w-100">
                      <div className="login-input flex">
                        <div className="input-icons">
                          <i className="mdi mdi-email-outline"></i>
                        </div>
                        <div className="input-text">
                          <FormGroup className="input-text-form-wrapper">
                            <FormControl
                              searchable={false}
                              onChange={(e) => this.onChangeCustomerType("customertype", e)}
                              name="customertype"
                              className=""
                              data={customertype}
                              required
                              errorMessage={this.state.formError.customertype}
                              placeholder="Bitte auswählen"
                              accepter={SelectPicker}
                            />
                          </FormGroup>
                        </div>
                      </div>
                    </div>

                    {initialValue ? <this.Adressdaten /> : ""}

                    <div className="login-button-text">
                      <div className="flex-j-c">
                        <div className="login-btn">
                          <button onClick={this.handleSubmit}>Registrieren</button>
                        </div>
                      </div>
                    </div>
                  </Form>

                  <div className="register-text">
                    still user?
                    <span>
                      <Link href="/login">Login </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Fragment>
    )
  }
}
