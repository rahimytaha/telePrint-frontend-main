/** @format */

import React, { Component } from "react"
import { Form, FormGroup, Notification, FormControl, SelectPicker, Button, ControlLabel, Schema, Loader, Checkbox, CheckboxGroup } from "rsuite"

import { emit } from "jetemit"

import Link from "next/link"
import Cookies from "universal-cookie"

import { packageApi } from "../../../../api/Api"
import CustomLoader from "../../../../components/costomLoader"
import FileInput from "../../../../components/fileInput"
import LoginModal from "../../../auth/login/model"
import Datenschutzerklärung from "../../../datenschutzerklarung/model"
const { StringType, NumberType, BooleanType } = Schema.Types

const cookies = new Cookies()
export default class Product extends Component {
  state = {
    steps: "step1",

    processing: false,
    progress: false,
    percent: 0,
    src1: "",
    src2: "",
    cellophaneType: [
      {
        label: "Matt",
        value: "Matt"
      },
      { label: "glänzend", value: "glänzend" }
    ],
    shipment: [
      { label: "Abholen", value: "pickup" }
      // {
      //   label: "send",
      //   value: "send",
      // },
    ],
    doubleSidedId: "",

    doubleSided: [
      {
        label: "beidseitig",
        value: true
      },
      { label: "einseitig", value: false }
    ],
    colorful: [
      {
        label: "S/W",
        value: false
      },
      { label: "farbig", value: true }
    ],
    isCellophane: [
      {
        label: "Ja",
        value: true
      },
      { label: "Nein", value: false }
    ],
    checkDatenverwendung: [],
    material: [],
    initialValues: {
      description: "",
      shipment: "pickup"
    },
    formError: {},
    formError1: {},
    loading: false,
    loading1: false,
    loadingRecord: false,
    show: false,
    materialShow: false,
    loadingPage: false,
    showLogin: false,
    endFormatId: ""
  }

  handleLogin = (boolean) => {
    this.setState({ showLogin: boolean })
  }

  open = (funcName, title, message) => {
    Notification[funcName]({
      title: title,
      description: <div style={{ color: "black" }}>{message}</div>
    })
  }

  onChange = async (name, value) => {
    await this.setState({
      initialValues: {
        ...this.state.initialValues,
        [name]: value
      }
    })
  }

  debounceTimeout

  handleChangeFileOne = async ({ target }) => {
    this.setState({ loading: true })
    try {
      let file = target.files[0],
        src = target.value
      var reader = new FileReader()
      reader.onloadend = () => {
        this.setState({
          initialValues: {
            ...this.state.initialValues,
            file1: file
          },
          file,
          imagePreviewUrl: reader.result
        })
      }
      reader.readAsDataURL(file)

      if (target.files && target.files[0]) {
        let reader = new FileReader()
        reader.onload = (e) => {
          this.setState({ image1: e.target.result })
        }
        reader.readAsDataURL(target.files[0])
      }

      this.setState({ file, src1: src })
    } catch (error) {}
    setTimeout(() => {
      this.setState({ loading: false })
    }, 5000)
  }

  handleChangeFileTwo = async ({ target }) => {
    this.setState({ loading1: true })
    try {
      let file = target.files[0],
        src = target.value
      var reader = new FileReader()
      reader.onloadend = () => {
        this.setState({
          initialValues: {
            ...this.state.initialValues,
            file2: file
          },
          file,
          imagePreviewUrl: reader.result
        })
      }
      reader.readAsDataURL(file)
      if (target.files && target.files[0]) {
        let reader = new FileReader()
        reader.onload = (e) => {
          this.setState({ image2: e.target.result })
        }
        reader.readAsDataURL(target.files[0])
      }

      this.setState({ file, src2: src })
    } catch (error) {}
    setTimeout(() => {
      this.setState({ loading1: false })
    }, 5000)
  }

  loaderPercentage = (percent) => {
    let percentCompleted = Math.floor((percent.loaded / percent.total) * 100)
    this.setState({ percent: percentCompleted })
  }

  handleSubmit = async () => {
    const token = cookies.get("token")
    if (!token) {
      this.handleLogin(true)
      this.open("error", "Warnung", "Bitte anmelden")
      return
    }

    await this.setState({
      initialValues: {
        ...this.state.initialValues,
        type: this.props.type
      }
    })

    try {
      if (!this.state.initialValues.file1 && !this.state.initialValues.file2) {
        return this.open("error", "Warnung", "Datei 1 ist erforderlich")
      }
      if (!this.state.checkDatenverwendung.length) {
        return this.open("error", "Warnung", "check Datenverwendung is requierd")
      }
      this.setState({ loadingRecord: true, progress: true })

      const { data } = await packageApi.packageRecord(this.state.initialValues, this.loaderPercentage)
      this.setState({ file1: "", file2: "" })
      // await localStorage.setItem(
      //   "phoneNumber",
      //   this.state.initialValues.phoneNumber
      // );
      // await localStorage.setItem("email", this.state.initialValues.email);
      emit("order", data)

      this.open("success", "Bestätigung", "Dieser Artikel wurde Ihrem Einkaufswagen hinzugefügt.")
    } catch (error) {
      console.log("error", error)
      this.open("error", "Warnung", "Es ist ein Problem aufgetreten. Bitte versuchen Sie es erneut.")
    }
    this.setState({ loadingRecord: false, percent: 0 })
  }

  handleOpen = () => {
    this.setState({ show: true })
  }
  handleClose = () => {
    this.setState({ show: false })
  }

  render() {
    const {
      // loadingRecord,
      loading,
      loading1,
      image2,
      steps,
      shipment,
      loadingPage
    } = this.state
    return (
      <>
        <LoginModal handleClose={() => this.handleLogin(false)} show={showLogin} />

        <div className="product-order">
          {loadingPage ? (
            <CustomLoader />
          ) : (
            <Form
              onCheck={(formError1) => {
                this.setState({ formError1 })
              }}
              ref={(ref) => (this.form1 = ref)}
              formValue={this.state.initialValues}
              layout="horizontal"
              fluid
            >
              <div className="data-upload__content">
                <div className="data-upload__title">Ihre Datei(en) hochladen</div>
                <div className="data-upload__explane">
                  Bitte laden Sie ausschließlich geschlossene Dateiformate hoch: PDF, JPG, JPEG, PNG, TIFF, EPS
                </div>

                <div className="data-upload__button">
                  <FileInput name="file1" id="file" required onChange={this.handleChangeFileOne} />
                </div>
                <div className="data-upload__button">
                  <FileInput name="file2" id="file" onChange={this.handleChangeFileTwo} />
                </div>
              </div>

              <div className="main2-buy-child2">
                <div className="data-upload__describe-title">Beschreibung</div>
                <FormControl
                  onChange={(e) => this.onChange("description", e)}
                  className="data-upload__describe-area"
                  name="description"
                  rows={10}
                  cols={100}
                  componentClass="textarea"
                />
              </div>
              <CheckboxGroup
                inline
                name="checkboxList"
                value={this.state.value}
                className="data-upload__footnote"
                onChange={(checkDatenverwendung) => {
                  this.setState({ checkDatenverwendung })
                }}
              >
                <Checkbox value={true} className="data-upload__footnote-text">
                  Details zur Datenverwendung und unseren Dienstleistern können Sie unserer{" "}
                  <Link style={{ padding: "10px" }} href="/datenschutzerklarung">
                    {" "}
                    Datenschutzerklärung
                  </Link>
                  entnehmen.
                </Checkbox>
              </CheckboxGroup>
            </Form>
          )}

          <div className="product__button flex-j-s">
            <Button onClick={this.handleSubmit} appearance="primary">
              Zum Warenkorb
            </Button>

            <Button onClick={() => this.handleStep(1)} disabled={steps === "step1"}>
              Vorherige Stufe
            </Button>
          </div>
        </div>
      </>
    )
  }
}
