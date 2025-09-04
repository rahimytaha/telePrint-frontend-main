/** @format */

import React, { Component } from "react"
import { Form, FormControl, Button, Modal, SelectPicker, ControlLabel, FormGroup, Schema } from "rsuite"

const { StringType, NumberType } = Schema.Types

const model_privateCustomer = Schema.Model({
  email: StringType().isEmail("Please enter a valid email address.").isRequired("This field is required."),
  // postalCode: NumberType("Please enter a valid number.").isRequired(
  //   "PLZ is required."
  // ),
  // country: StringType().isRequired("Land field is required."),
  // street: StringType().isRequired("Straße & Hausnummer field is required."),
  // address: StringType().isRequired("Ort field is required."),
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
  street: StringType().isRequired("Straße & Hausnummer field is required."),
  address: StringType().isRequired("Ort field is required."),
  phoneNumber: StringType().isRequired("Telefonnummer is required."),
  company: StringType().isRequired("Firma is required."),
  industry: StringType().isRequired("Branche is required.")
})

const model_partner = Schema.Model({
  email: StringType().isEmail("Please enter a valid email address.").isRequired("This field is required."),
  postalCode: NumberType("Please enter a valid number.").isRequired("PLZ is required."),
  customertype: StringType().isRequired("Privat-/Geschäftskunde is required."),
  country: StringType().isRequired("Land field is required."),
  street: StringType().isRequired("Straße & Hausnummer field is required."),
  address: StringType().isRequired("Ort field is required."),
  phoneNumber: StringType().isRequired("Telefonnummer is required."),
  company: StringType().isRequired("Firma is required."),
  industry: StringType().isRequired("Branche is required.")
})
const model_association = Schema.Model({
  email: StringType().isEmail("Please enter a valid email address.").isRequired("This field is required."),
  postalCode: NumberType("Please enter a valid number.").isRequired("PLZ is required."),
  customertype: StringType().isRequired("Privat-/Geschäftskunde is required."),
  country: StringType().isRequired("Land field is required."),
  street: StringType().isRequired("Straße & Hausnummer field is required."),
  address: StringType().isRequired("Ort field is required."),
  phoneNumber: StringType().isRequired("Telefonnummer is required."),
  chairman: StringType().isRequired("Obmann/Obfrau is required."),
  Association: StringType().isRequired("Name Ihres Vereins is required.")
})
export default class LoginForm extends Component {
  state = {
    customertype: [
      {
        label: "Privatkunde",
        value: "Privatkunde"
      },
      { label: "Busineskunde", value: "Busineskunde" },
      { label: "Partner", value: "Partner" },
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
      },
      { label: "Belgien", value: "Belgien" },
      { label: "Bulgarien", value: "Bulgarien" },
      { label: "Dänemark", value: "Dänemark" },
      { label: "Deutschland", value: "Deutschland" },
      { label: "Estland", value: "Estland" },
      { label: "Frankreich", value: "Frankreich" },
      { label: "Griechenland", value: "Griechenland" },
      { label: "Irland", value: "Irland" },
      { label: "Italien", value: "Italien" },
      { label: "Kroatien", value: "Kroatien" },
      { label: "Liechtenstein", value: "Liechtenstein" },
      { label: "Luxemburg", value: "Luxemburg" },
      { label: "Niederlande", value: "Niederlande" },
      { label: "Polen", value: "Polen" },
      { label: "Rumänien", value: "Rumänien" },
      { label: "Schweden", value: "Schweden" },
      { label: "Slowakei", value: "Slowakei" }
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
      address: localStorage.getItem("personalData") && JSON.parse(localStorage.getItem("personalData")).address,
      street: localStorage.getItem("personalData") && JSON.parse(localStorage.getItem("personalData")).street,
      phoneNumber: localStorage.getItem("personalData") && JSON.parse(localStorage.getItem("personalData")).phoneNumber,
      company: localStorage.getItem("personalData") && JSON.parse(localStorage.getItem("personalData")).company,
      industry: localStorage.getItem("personalData") && JSON.parse(localStorage.getItem("personalData")).industry,
      UID_Nummer: localStorage.getItem("personalData") && JSON.parse(localStorage.getItem("personalData")).UID_Nummer,
      Association: localStorage.getItem("personalData") && JSON.parse(localStorage.getItem("personalData")).Association,

      AssociationNumber: localStorage.getItem("personalData") && JSON.parse(localStorage.getItem("personalData")).AssociationNumber,

      chairman: localStorage.getItem("personalData") && JSON.parse(localStorage.getItem("personalData")).chairman
    }
  }

  personalDataChecker = () => {
    const personalData = JSON.parse(localStorage.getItem("personalData"))
    if (!personalData || !personalData.phoneNumber) {
      this.setState({ openNotifHandleInfo: true })
      this.setState({ show: true })

      this.open("error", "Warnung", "please enter your information")
      return { hasError: true, personalData: "" }
    } else {
      this.setState({ openNotifHandleInfo: false })
      return { hasError: false, personalData: personalData }
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
  handleSubmit = async () => {
    try {
      if (await !this.form.check()) {
        console.error("Form Error")
        return
      }
      if (await !this.form1.check()) {
        console.error("Form Error")
        return
      }
      localStorage.setItem("personalData", JSON.stringify(this.state.initialValue))
      this.props.personalDataChecker()
      this.props.handleClose()
    } catch (error) {
      console.log(error)
    }
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
    const { initialValue, gender, country, countryPartner, industry } = this.state
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
            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-anzahl flex">
                <ControlLabel>Vorname:</ControlLabel>
                <FormControl
                  className=""
                  placeholder="Vorname"
                  name="firstName"
                  type="text"
                  required
                  onChange={(e) => this.onChange("firstName", e)}
                  style={{ width: "100%" }}
                />
              </FormGroup>
            </div>
            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-anzahl flex">
                <ControlLabel>Nachname:</ControlLabel>
                <FormControl
                  className=""
                  placeholder="Nachname"
                  name="lastName"
                  type="text"
                  required
                  onChange={(e) => this.onChange("lastName", e)}
                  style={{ width: "100%" }}
                />
              </FormGroup>
            </div>

            <FormGroup className="marg-right20 head1-dad-down-right-inpt">
              <ControlLabel>Anrede</ControlLabel>
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
            <FormGroup className="marg-right20 head1-dad-down-right-inpt">
              <ControlLabel>
                Land<span className="requiredStar">*</span>
              </ControlLabel>
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
            <FormGroup className="marg-right20 head1-dad-down-right-inpt">
              <ControlLabel>
                Branche<span className="requiredStar">*</span>
              </ControlLabel>
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
            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-anzahl flex">
                <ControlLabel>
                  PLZ<span className="requiredStar">*</span>
                </ControlLabel>
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

            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-anzahl flex">
                <ControlLabel>
                  Ort<span className="requiredStar">*</span>
                </ControlLabel>
                <FormControl
                  className=""
                  placeholder="Ort"
                  name="address"
                  type="text"
                  required
                  onChange={(e) => this.onChange("address", e)}
                  style={{ width: "100%" }}
                />
              </FormGroup>
            </div>
            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-1">
                <ControlLabel>
                  Straße & Hausnummer<span className="requiredStar">*</span>
                </ControlLabel>
                <FormControl
                  className=""
                  placeholder="Straße & Hausnummer"
                  name="street"
                  type="text"
                  required
                  onChange={(e) => this.onChange("street", e)}
                  style={{ width: "100%" }}
                />
              </FormGroup>{" "}
            </div>
            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-1">
                <ControlLabel>
                  Telefonnummer<span className="requiredStar">*</span>
                </ControlLabel>
                <FormControl
                  className=""
                  placeholder="Telefonnummer"
                  name="phoneNumber"
                  type="number"
                  required
                  onChange={(e) => this.onChange("phoneNumber", e)}
                  style={{ width: "100%" }}
                />
              </FormGroup>
            </div>
            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-1">
                <ControlLabel>
                  Email<span className="requiredStar">*</span>
                </ControlLabel>
                <FormControl
                  className=""
                  placeholder="Email"
                  name="email"
                  type="text"
                  required
                  onChange={(e) => this.onChange("email", e)}
                  style={{ width: "100%" }}
                />
              </FormGroup>
            </div>
            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-1">
                <ControlLabel>UID-Nummer</ControlLabel>
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

            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-1">
                <ControlLabel>
                  Firma<span className="requiredStar">*</span>
                </ControlLabel>
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
            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-anzahl flex">
                <ControlLabel>Vorname:</ControlLabel>
                <FormControl
                  className=""
                  placeholder="Vorname"
                  name="firstName"
                  type="text"
                  required
                  onChange={(e) => this.onChange("firstName", e)}
                  style={{ width: "100%" }}
                />
              </FormGroup>
            </div>
            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-anzahl flex">
                <ControlLabel>Nachname:</ControlLabel>
                <FormControl
                  className=""
                  placeholder="Nachname"
                  name="lastName"
                  type="text"
                  required
                  onChange={(e) => this.onChange("lastName", e)}
                  style={{ width: "100%" }}
                />
              </FormGroup>
            </div>

            <FormGroup className="marg-right20 head1-dad-down-right-inpt">
              <ControlLabel>Anrede</ControlLabel>
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
            <FormGroup className="marg-right20 head1-dad-down-right-inpt">
              <ControlLabel>
                Land<span className="requiredStar">*</span>
              </ControlLabel>
              <FormControl
                searchable={false}
                onChange={(e) => this.onChange("country", e)}
                name="country"
                className=""
                errorMessage={this.state.formError.country}
                data={countryPartner}
                required
                placeholder="Bitte auswählen"
                accepter={SelectPicker}
              />
            </FormGroup>
            <FormGroup className="marg-right20 head1-dad-down-right-inpt">
              <ControlLabel>
                Branche<span className="requiredStar">*</span>
              </ControlLabel>
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
            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-anzahl flex">
                <ControlLabel>
                  PLZ<span className="requiredStar">*</span>
                </ControlLabel>
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

            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-anzahl flex">
                <ControlLabel>
                  Ort<span className="requiredStar">*</span>
                </ControlLabel>
                <FormControl
                  className=""
                  placeholder="Ort"
                  name="address"
                  type="text"
                  required
                  onChange={(e) => this.onChange("address", e)}
                  style={{ width: "100%" }}
                />
              </FormGroup>
            </div>
            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-1">
                <ControlLabel>
                  Straße & Hausnummer<span className="requiredStar">*</span>
                </ControlLabel>
                <FormControl
                  className=""
                  placeholder="Straße & Hausnummer"
                  name="street"
                  type="text"
                  required
                  onChange={(e) => this.onChange("street", e)}
                  style={{ width: "100%" }}
                />
              </FormGroup>{" "}
            </div>
            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-1">
                <ControlLabel>
                  Telefonnummer<span className="requiredStar">*</span>
                </ControlLabel>
                <FormControl
                  className=""
                  placeholder="Telefonnummer"
                  name="phoneNumber"
                  type="number"
                  required
                  onChange={(e) => this.onChange("phoneNumber", e)}
                  style={{ width: "100%" }}
                />
              </FormGroup>
            </div>
            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-1">
                <ControlLabel>
                  Email<span className="requiredStar">*</span>
                </ControlLabel>
                <FormControl
                  className=""
                  placeholder="Email"
                  name="email"
                  type="text"
                  required
                  onChange={(e) => this.onChange("email", e)}
                  style={{ width: "100%" }}
                />
              </FormGroup>
            </div>
            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-1">
                <ControlLabel>UID-Nummer</ControlLabel>
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

            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-1">
                <ControlLabel>
                  Firma<span className="requiredStar">*</span>
                </ControlLabel>
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
            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-anzahl flex">
                <ControlLabel>Vorname:</ControlLabel>
                <FormControl
                  className=""
                  placeholder="Vorname"
                  name="firstName"
                  type="text"
                  required
                  onChange={(e) => this.onChange("firstName", e)}
                  style={{ width: "100%" }}
                />
              </FormGroup>
            </div>
            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-anzahl flex">
                <ControlLabel>Nachname:</ControlLabel>
                <FormControl
                  className=""
                  placeholder="Nachname"
                  name="lastName"
                  type="text"
                  required
                  onChange={(e) => this.onChange("lastName", e)}
                  style={{ width: "100%" }}
                />
              </FormGroup>
            </div>

            <FormGroup className="marg-right20 head1-dad-down-right-inpt">
              <ControlLabel>Anrede</ControlLabel>
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
            <FormGroup className="marg-right20 head1-dad-down-right-inpt">
              <ControlLabel>
                Land<span className="requiredStar">*</span>
              </ControlLabel>
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
            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-anzahl flex">
                <ControlLabel>
                  PLZ<span className="requiredStar">*</span>
                </ControlLabel>
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

            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-anzahl flex">
                <ControlLabel>
                  Ort<span className="requiredStar">*</span>
                </ControlLabel>
                <FormControl
                  className=""
                  placeholder="Ort"
                  name="address"
                  type="text"
                  required
                  onChange={(e) => this.onChange("address", e)}
                  style={{ width: "100%" }}
                />
              </FormGroup>
            </div>
            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-1">
                <ControlLabel>
                  Straße & Hausnummer<span className="requiredStar">*</span>
                </ControlLabel>
                <FormControl
                  className=""
                  placeholder="Straße & Hausnummer"
                  name="street"
                  type="text"
                  required
                  onChange={(e) => this.onChange("street", e)}
                  style={{ width: "100%" }}
                />
              </FormGroup>{" "}
            </div>
            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-1">
                <ControlLabel>
                  Telefonnummer<span className="requiredStar">*</span>
                </ControlLabel>
                <FormControl
                  className=""
                  placeholder="Telefonnummer"
                  name="phoneNumber"
                  type="number"
                  required
                  onChange={(e) => this.onChange("phoneNumber", e)}
                  style={{ width: "100%" }}
                />
              </FormGroup>
            </div>
            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-1">
                <ControlLabel>
                  Email<span className="requiredStar">*</span>
                </ControlLabel>
                <FormControl
                  className=""
                  placeholder="Email"
                  name="email"
                  type="text"
                  required
                  onChange={(e) => this.onChange("email", e)}
                  style={{ width: "100%" }}
                />
              </FormGroup>
            </div>

            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-1">
                <ControlLabel>Vereinsnummer</ControlLabel>
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

            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-1">
                <ControlLabel>Name Ihres Vereins*</ControlLabel>
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

            <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
              <FormGroup className="marg-right20 head1-dad-down-right-inpt-1">
                <ControlLabel>
                  Obmann/Obfrau<span className="requiredStar">*</span>
                </ControlLabel>
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
            <FormGroup className=".rs-input form-group__input">
              <div className="input__title">
                <ControlLabel>
                  Vorname<span className="requiredStar">*</span>
                </ControlLabel>
              </div>
              <div className="input__fill-text form-group__input-wrapper">
                <FormControl
                  className=""
                  placeholder="Vorname"
                  name="firstName"
                  type="text"
                  required
                  onChange={(e) => this.onChange("firstName", e)}
                  style={{ width: "100%" }}
                />
              </div>
            </FormGroup>
            <FormGroup className=".rs-input form-group__input">
              <div className="input__title">
                <ControlLabel>
                  Nachname<span className="requiredStar">*</span>
                </ControlLabel>
              </div>
              <div className="input__fill-text form-group__input-wrapper">
                <FormControl
                  className=""
                  placeholder="Nachname"
                  name="lastName"
                  type="text"
                  required
                  onChange={(e) => this.onChange("lastName", e)}
                  style={{ width: "100%" }}
                />
              </div>
            </FormGroup>
            <FormGroup className=".rs-input form-group__input">
              <div className="input__title">
                <ControlLabel>Anrede</ControlLabel>
              </div>
              <div className="input__fill-text form-group__input-wrapper">
                <FormControl
                  searchable={false}
                  onChange={(e) => this.onChange("gender", e)}
                  name="gender"
                  className=""
                  data={gender}
                  required
                  placeholder="Anrede"
                  accepter={SelectPicker}
                  style={{ width: "100%" }}
                />
              </div>
            </FormGroup>
            <FormGroup className=".rs-input form-group__input">
              <div className="input__title">
                <ControlLabel>
                  Land
                  {/* <span className="requiredStar">*</span> */}
                </ControlLabel>
              </div>
              <div className="input__fill-text form-group__input-wrapper">
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
                  style={{ width: "100%" }}
                />
              </div>
            </FormGroup>
            <FormGroup className=".rs-input form-group__input">
              <div className="input__title">
                <ControlLabel>
                  PLZ
                  {/* <span className="requiredStar">*</span> */}
                </ControlLabel>
              </div>
              <div className="input__fill-text form-group__input-wrapper">
                <FormControl
                  className=""
                  placeholder="PLZ"
                  name="postalCode"
                  type="text"
                  required
                  onChange={(e) => this.onChange("postalCode", e)}
                  style={{ width: "100%" }}
                />
              </div>
            </FormGroup>
            <FormGroup className=".rs-input form-group__input">
              <div className="input__title">
                <ControlLabel>
                  Ort
                  {/* <span className="requiredStar">*</span> */}
                </ControlLabel>
              </div>
              <div className="input__fill-text form-group__input-wrapper">
                <FormControl
                  className=""
                  placeholder="Ort"
                  name="address"
                  type="text"
                  required
                  onChange={(e) => this.onChange("address", e)}
                  style={{ width: "100%" }}
                />
              </div>
            </FormGroup>
            <FormGroup className=".rs-input form-group__input">
              <div className="input__title">
                <ControlLabel>
                  Straße & Hausnummer
                  {/* <span className="requiredStar">*</span> */}
                </ControlLabel>
              </div>
              <div className="input__fill-text form-group__input-wrapper">
                <FormControl
                  className=""
                  placeholder="Straße & Hausnummer"
                  name="street"
                  type="text"
                  required
                  onChange={(e) => this.onChange("street", e)}
                  style={{ width: "100%" }}
                />
              </div>
            </FormGroup>{" "}
            <FormGroup className=".rs-input form-group__input">
              <div className="input__title ">
                <ControlLabel>
                  Telefonnummer<span className="requiredStar">*</span>
                </ControlLabel>
              </div>
              <div className="input__fill-text form-group__input-wrapper">
                <FormControl
                  className=""
                  placeholder="Telefonnummer"
                  name="phoneNumber"
                  type="number"
                  required
                  onChange={(e) => this.onChange("phoneNumber", e)}
                  style={{ width: "100%" }}
                />
              </div>
            </FormGroup>
            <FormGroup className=".rs-input form-group__input">
              <div className="input__title">
                <ControlLabel>
                  Email<span className="requiredStar">*</span>
                </ControlLabel>
              </div>
              <div className="input__fill-text form-group__input-wrapper">
                <FormControl
                  className=""
                  placeholder="Email"
                  name="email"
                  type="text"
                  required
                  onChange={(e) => this.onChange("email", e)}
                  style={{ width: "100%" }}
                />
              </div>
            </FormGroup>
          </Form>
        )
    }
  }

  render() {
    const { customertype, initialValue } = this.state
    return (
      <Modal show={this.props.open} onHide={this.props.handleClose} size="md" backdrop={false} overflow={true} className="modalInfo">
        <Modal.Header>
          <Modal.Title>register</Modal.Title>
        </Modal.Header>

        <Modal.Body>
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
            <FormGroup className=".rs-input form-group__input">
              <div className="input__title">
                <ControlLabel>
                  Privat-/Geschäftskunde<span className="requiredStar">*</span>
                </ControlLabel>
              </div>
              <div className="input__fill-text form-group__input-wrapper">
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
                  style={{ width: "100%" }}
                />
              </div>
            </FormGroup>

            {initialValue ? <this.Adressdaten /> : ""}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleSubmit} appearance="primary">
            Ok
          </Button>
          <Button onClick={this.props.handleClose} appearance="subtle">
            Abbrechen
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
