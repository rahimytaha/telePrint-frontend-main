/** @format */

import React, { Component } from "react"
//api
import { withRouter } from "next/router"
import router from "next/router"
import {
  Button,
  Input,
  Form,
  Notification,
  Schema,
  Progress,
  ControlLabel,
  FormGroup
  // Checkbox,
  // CheckboxGroup,
} from "rsuite"
import { account, Support } from "../../api/Api"
import FileInput from "../../components/fileInput"
import Link from "next/link"
const { StringType, NumberType } = Schema.Types
const model = Schema.Model({
  // email: StringType()
  //   .isEmail("Please enter a valid email address.")
  //   .isRequired("This field is required."),
  firstName: StringType().isRequired("firstName is required."),
  lastName: StringType().isRequired("lastName is required."),
  email: StringType().isRequired("email is required."),
  phoneNumber: NumberType().isRequired("phoneNumber is required.")
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
      product: "",
      count: 0,
      description: ""
    },
    formError: {},
    redirect: false,
    loadingButtom: false,
    loading2: false,
    loading1: false,
    src1: "",
    src2: "",
    productName: ""
  }

  handleChange = (value, name) => {
    this.setState({
      initialValue: { ...this.state.initialValue, [name]: value }
    })
  }

  open = (funcName, title, message) => {
    Notification[funcName]({
      title: title,
      description: <div>{message}</div>
    })
  }

  componentDidMount() {
    const Path = this.props?.router?.asPath
    const productName = Path.split("name=")[1]
    this.setState({ initialValue: { ...this.state.initialValue, product: productName } })
    this.getData()
  }

  onChange = (name, value) => {
    this.setState({
      initialValue: {
        ...this.state.initialValue,
        [name]: value
      }
    })
    if (name === "description") {
      this.setState({
        initialValue: {
          ...this.state.initialValue,
          [name]: value.target.value
        }
      })
    }
  }
  getData = async () => {
    try {
      const { data, status } = await account.getMe()
      if (status === 200) {
        this.setState({
          initialValue: {
            ...this.state.initialValue,
            ...data.data
          }
        })
      }
    } catch (error) {
      console.error(error)
    }

    // const data = (localStorage.getItem("personalData"));
  }
  onChangeAnzahl = async (value) => {
    await this.setState({
      initialValue: {
        ...this.state.initialValue,
        count: Number(value)
      }
    })
  }
  loaderPercentage = (percent) => {
    let percentCompleted = Math.floor((percent.loaded / percent.total) * 100)
    this.setState({ percent: percentCompleted })
  }

  handleChangeFile = async ({ target }, Name) => {
    this.setState({ [`loading${Name}`]: true })
    try {
      let file = target.files[0],
        src = target.value

      var reader = new FileReader()
      reader.onloadend = () => {
        this.setState({
          initialValue: {
            ...this.state.initialValue,
            [`file${Name}`]: file
          },
          [`file${Name}`]: file,
          [`image${Name}`]: reader.result,
          [`src${Name}`]: src
        })
      }
      reader.readAsDataURL(file)
    } catch (error) {}
    setTimeout(() => {
      this.setState({ [`loading${Name}`]: false })
    }, 5000)
  }

  handleSubmit = async () => {
    try {
      if (await !this.form.check()) {
        // if (this.state.formError.firstName) {
        //   this.open("error", "Warnung", this.state.formError.firstName);
        // }
        // if (this.state.formError.lastName) {
        //   this.open("error", "Warnung", this.state.formError.lastName);
        // }
        // if (this.state.formError.phoneNumber) {
        //   this.open("error", "Warnung", this.state.formError.phoneNumber);
        // }
        if (this.state.formError.email) {
          this.open("error", "Warnung", this.state.formError.email)
        }
        console.error("Form Error")
        return
      }

      this.setState({ loadingButtom: true, progress: true })
      const { status } = await Support.Support(this.state.initialValue, this.loaderPercentage)
      if (status === 200) {
        this.open("success", "Bestätigung", "Ihre Anfrage wurde erfolgreich gesendet.")
        router.push("/")
      }
    } catch (error) {
      console.error(error)
    }
    this.setState({ loadingButtom: false, progress: false })
  }
  render() {
    const { redirect, loadingButtom, progress, percent, productName, initialValue } = this.state
    const queryParam = this.props?.props?.router?.query?.name
    return (
      <main>
        {progress ? (
          <div className="loader-progress flex-j-c">
            <div className="percent-loader">
              <div
                style={{
                  width: 120,
                  display: "inline-block",
                  marginRight: 10
                }}
              >
                <Progress.Circle percent={percent} strokeColor="#f58634" status={percent === 100 && "success"} />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="main-page">
          <div className="main-container">
            <div className="payment-measurement">
              <div className="payment-section anfrageSection">
                <div className="payment__methods-container">
                  <div className="payment-title padding-btm-0">Anfrage </div>
                  <div className="data-upload__explane data-upload__explane-resp">
                    Bitte laden Sie ausschliesslich geschlossene Dateiformate hoch: PDF, JPG, JPEG, PNG, TIFF, max. Dateigrosse: 256MB
                  </div>
                  <div className="data-upload__button">
                    {/* <Button>
                      <div className="mdi mdi-upload"> </div>
                      <div className="data-upload__button-name">
                        {" "}
                        Datei(en) hinzufügen{" "}
                      </div>
                    </Button> */}
                    <FileInput name="file1" required onChange={(e) => this.handleChangeFile(e, 1)} id="file" />
                  </div>
                  <div className="data-upload__button">
                    <FileInput name="file2" id="file" required onChange={(e) => this.handleChangeFile(e, 2)} />
                  </div>
                  <div className="data-upload__describe-title">Beschreibung</div>
                  <div className="data-upload__describe-area data-upload__describe-area-resp">
                    <textarea name="description" onChange={(e) => this.onChange("description", e)} rows="6" cols="70" />
                  </div>
                  <div className="data-upload__footnote">
                    <div>
                      <Input type="radio" />
                    </div>
                    <div className="data-upload__footnote-text data-upload__footnote-text-resp">
                      Details zur Datenverwendung und unseren Dienstleistern können Sie unserer
                      <Link href="/datenschutzerklarung">
                        <a style={{ padding: "5px", color: "blue" }}>Datenschutzerklärung</a>
                      </Link>
                      entnehmen.
                    </div>
                  </div>
                </div>
                <Form
                  className="anfrageForm"
                  onCheck={(formError) => {
                    this.setState({ formError })
                  }}
                  ref={(ref) => (this.form = ref)}
                  formValue={this.state.initialValue}
                  model={model}
                  layout="horizontal"
                  fluid
                >
                  <div
                    // className="payment__details-container"
                    style={{ width: "100%" }}
                  >
                    <div className="payment-title payment-title-responsive">Kontaktdaten {queryParam ? `(${queryParam})` : null}</div>
                    <div className="inquery-container">
                      <div className="payment-details">
                        <FormGroup className="productDetail-formGroup AnzahlBg">
                          <ControlLabel className="payment__person-info">
                            Vorname<span className="redStar">*</span>
                          </ControlLabel>
                          <Input
                            className="color575757"
                            type="text"
                            name="firstName"
                            placeholder="Vorname"
                            required
                            onChange={(e) => this.onChange("firstName", e)}
                            value={initialValue.firstName}
                          />
                        </FormGroup>
                      </div>

                      <div className="payment-details">
                        <FormGroup className="productDetail-formGroup AnzahlBg">
                          <ControlLabel className="payment__person-info">
                            Nachname<span className="redStar">*</span>
                          </ControlLabel>
                          <Input
                            className="color575757"
                            name="lastName"
                            type="text"
                            required
                            onChange={(e) => this.onChange("lastName", e)}
                            placeholder="Nachname"
                            value={initialValue.lastName}
                          />
                        </FormGroup>
                      </div>

                      <div className="payment-details">
                        <FormGroup className="productDetail-formGroup AnzahlBg">
                          <ControlLabel className="payment__person-info">
                            Telefon<span className="redStar">*</span>
                          </ControlLabel>
                          <Input
                            className="color575757"
                            name="phoneNumber"
                            type="text"
                            required
                            onChange={(e) => this.onChange("phoneNumber", e)}
                            placeholder="Telefon"
                            value={initialValue.phoneNumber}
                          />
                        </FormGroup>
                      </div>
                      <div className="payment-details">
                        <FormGroup className="productDetail-formGroup AnzahlBg">
                          <ControlLabel className="payment__person-info">
                            Email<span className="redStar">*</span>
                          </ControlLabel>
                          <Input
                            className="color575757"
                            name="email"
                            type="email"
                            required
                            onChange={(e) => this.onChange("email", e)}
                            placeholder="Email"
                            value={initialValue.email}
                          />
                        </FormGroup>
                      </div>
                      <div className="payment-details margin-top-40">
                        <FormGroup className="productDetail-formGroup AnzahlBg">
                          <ControlLabel className="payment__person-info">Produkt</ControlLabel>
                          <Input
                            className="color575757"
                            name="product"
                            type="text"
                            onChange={(e) => this.onChange("product", e)}
                            value={initialValue.product}
                            placeholder="Produkt"
                          />
                        </FormGroup>
                      </div>

                      <div className="payment-details">
                        <FormGroup className="productDetail-formGroup AnzahlBg">
                          <ControlLabel className="payment__person-info">Anzahl:</ControlLabel>
                          <Input
                            className="color575757"
                            name="count"
                            type="number"
                            onChange={(value) => this.onChangeAnzahl(value)}
                            placeholder="Anzahl"
                          />
                        </FormGroup>
                      </div>
                      <div className="send-return-button-section">
                        <div className="send-return__button">
                          <Button onClick={this.props.router.back}>Zurück</Button>
                        </div>
                        <div className="send-return__button">
                          <Button onClick={this.handleSubmit}>Senden</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export default withRouter(gride)
