/** @format */

import React, { Component } from "react"
import {
  Form,
  FormGroup,
  Notification,
  FormControl,
  SelectPicker,
  Button,
  ControlLabel,
  Schema,
  Loader,
  Progress,
  Checkbox,
  CheckboxGroup,
  Input
} from "rsuite"
import Cookies from "universal-cookie"
import { emit } from "jetemit"

import Link from "next/link"

import { PrintyDatumstempel } from "../../../../api/Api"
import CustomLoader from "../../../../components/costomLoader"
import ModalForm from "../../../../components/modal"
import FileInput from "../../../../components/fileInput"
import LoginModal from "../../../auth/login/model"
import Datenschutzerklärung from "../../../datenschutzerklarung/model"
import { TeleLoader } from "../components/Progress"
const { StringType, NumberType, BooleanType } = Schema.Types

const model1 = Schema.Model({
  email: StringType().isEmail("Please enter a valid email address.").isRequired("email is required."),
  phoneNumber: StringType().isRequired("Telefonnummer is required.")
})
const BooleanOptions = [
  { label: "Ja", value: true },
  { label: "Nein", value: false }
]
const cookies = new Cookies()
export default class Product extends Component {
  state = {
    steps: "step1",
    pillowColor: [],
    pillowColorId: "",
    isRound: false,
    processing: false,
    isComplete: false,
    count: 1,
    progress: false,
    percent: 0,
    description: "",
    src1: "",
    src2: "",
    art: [],
    artId: "",
    shipment: "pickup",
    shipments: [
      { label: "Abholen", value: "pickup" }
      // {
      //   label: "send",
      //   value: "send",
      // },
    ],
    file1: "",
    file2: "",
    formError: {},
    formError1: {},
    loading: false,
    loading1: false,
    loadingRecord: false,
    show: false,
    loadingPage: false,
    endFormatId: "",
    pillowColorId: ""
  }

  open = (funcName, title, message) => {
    Notification[funcName]({
      title: title,
      description: <div style={{ color: "black" }}>{message}</div>
    })
  }

  componentDidMount() {
    this.getPillowColor()
  }

  getArt = async () => {
    clearTimeout(this.debounceTimeout)
    this.debounceTimeout = setTimeout(async () => {
      try {
        this.setState({ art: [], artShow: false })
        const sendData = {
          pillowColorId: this.state.pillowColorId,
          isRound: this.state.isRound,
          isComplete: this.state.isComplete,
          count: this.state.count
        }
        const { data } = await PrintyDatumstempel.digiPrintArt(sendData)

        const returnData = data.data.map((element) => {
          const returnElement = {
            label: element.key + "  € " + element.price + ",- inkl. 20% USt.",
            value: element.id
          }
          return returnElement
        })

        this.setState({
          artId: returnData && returnData[0] && returnData[0].value,
          art: returnData
        })
      } catch (error) {
        console.error(error)
      }
    }, 500)
  }
  onChange = async (name, value) => {
    await this.setState({
      [name]: value
    })
    this.getArt()
  }
  onChangeAnzahl = async (value) => {
    await this.setState({
      count: value
    })

    if (Number(value) > 0) {
      this.getArt()
    } else {
      this.setState({ art: [] })
    }
  }
  debounceTimeout
  handleLogin = (boolean) => {
    this.setState({ showLogin: boolean })
  }
  getPillowColor = async () => {
    try {
      this.setState({ loadingPage: true, percent: 0 })
      const { data } = await PrintyDatumstempel.getAllPillowColor()
      const colorOption = data.data.map((element) => {
        const returnData = {
          label: element.key,
          value: element.id
        }
        return returnData
      })

      this.setState({ pillowColor: colorOption, pillowColorId: data.data[0].id, loadingPage: false })
      this.getArt()
    } catch (error) {
      console.error(error)
    }
    this.setState({ loadingPage: false })
  }

  // handleStep = async (step) => {
  //   if (step === 1) {
  //     this.getMaterial();
  //     this.setState({ steps: `step${step}` });

  //     return;
  //   }
  //   if (step === 2) {
  //     if (await !this.form.check()) {
  //       if (this.state.formError.materialId) {
  //         this.open("error", "Warnung", this.state.formError.materialId);
  //       }
  //       if (this.state.formError.width) {
  //         this.open("error", "Warnung", this.state.formError.width);
  //       }
  //       if (this.state.formError.colorful) {
  //         this.open("error", "Warnung", this.state.formError.colorful);
  //       }
  //       if (this.state.formError.doubleSided) {
  //         this.open("error", "Warnung", this.state.formError.doubleSided);
  //       }

  //       console.error("Form Error");
  //       return;
  //     }
  //     this.setState({ steps: `step${step}` });
  //   }
  // };

  handleChangeFileOne = async ({ target }) => {
    this.setState({ loading: true })
    try {
      let file = target.files[0],
        src = target.value
      var reader = new FileReader()
      reader.onloadend = () => {
        this.setState({
          file1: file,

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
          file2: file,

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
  handleSubmit = async () => {
    const { hasError, personalData } = this.personalDataChecker()
    if (hasError) {
      return
    }

    const sendData = {
      pillowColorId: this.state.pillowColorId,
      isRound: this.state.isRound,
      isComplete: this.state.isComplete,
      count: this.state.count,
      artId: this.state.artId,
      shipment: this.state.shipment,
      file1: this.state.file1,
      file2: this.state.file2,
      description: this.state.description
    }
    try {
      if (!this.state.file1 && !this.state.file2) {
        return this.open("error", "Warnung", "Datei 1 ist erforderlich")
      }
      if (!this.state.checkDatenverwendung.length) {
        return this.open("error", "Warnung", "check Datenverwendung is requierd")
      }
      this.setState({ loadingRecord: true, progress: true })
      const { data } = await PrintyDatumstempel.record(sendData, this.loaderPercentage)
      this.setState({ file1: "", file2: "" })
      // await localStorage.setItem(
      //   "phoneNumber",
      //   this.state.initialValues.phoneNumber
      // );
      // await localStorage.setItem("email", this.state.initialValues.email);
      emit("order", data)
      this.open("success", "Bestätigung", "Dieser Artikel wurde Ihrem Einkaufswagen hinzugefügt.")

      this.handleStep(1)
    } catch (error) {
      this.open("error", "Warnung", "Es ist ein Problem aufgetreten. Bitte versuchen Sie es erneut.")
      console.error(error)
    }
    this.setState({ loadingRecord: false, percent: 0 })
  }

  handleOpen = () => {
    this.setState({ show: true })
  }
  handleClose = () => {
    this.setState({ show: false })
  }

  handleStep = async (step) => {
    if (step === 1) {
      this.getArt()
      this.setState({ steps: `step${step}` })
      this.props.setStep(step)
      return
    }
    const token = cookies.get("token")
    if (!token) {
      this.handleLogin(true)
      this.open("error", "Warnung", "Bitte anmelden")
      return
    }
    if (step === 2) {
      //   if (await !this.form.check()) {
      //     if (this.state.formError.materialId) {
      //       this.open("error", "Warnung", this.state.formError.materialId);
      //     }
      //     if (this.state.formError.width) {
      //       this.open("error", "Warnung", this.state.formError.width);
      //     }
      //     if (this.state.formError.colorful) {
      //       this.open("error", "Warnung", this.state.formError.colorful);
      //     }
      //     if (this.state.formError.doubleSided) {
      //       this.open("error", "Warnung", this.state.formError.doubleSided);
      //     }
      //     console.error("Form Error");
      //     return;
      //   }
      //   localStorage.removeItem("materialFlyerId");
      //   this.getMaterial();
    }
    this.setState({ steps: `step${step}` })
    this.props.setStep(step)
  }

  render() {
    const token = localStorage.getItem("token") && localStorage.getItem("token")
    const {
      steps,
      count,
      // loadingRecord,
      percent,
      show,
      art,
      initialValues,
      pillowColorId,
      loadingPage,
      pillowColor,
      artId,
      showLogin,
      isRound,
      isComplete
    } = this.state
    return (
      <>
        <LoginModal handleClose={() => this.handleLogin(false)} show={showLogin} />

        <ModalForm open={show} handleClose={this.handleClose} personalDataChecker={this.personalDataChecker} />
        <div className="product-order">
          {loadingPage ? (
            <CustomLoader />
          ) : steps === "step1" ? (
            <>
              <Form
                onChange={(formValue) => {
                  this.setState({ formValue })
                }}
                formValue={initialValues}
                layout="horizontal"
                fluid
              >
                <div className="product-details">
                  <div className="mb10-666">
                    <FormGroup className="productDetail-formGroup AnzahlBg">
                      <ControlLabel>Anzahl:</ControlLabel>
                      <Input
                        placeholder="Anzahl"
                        value={count}
                        name="count"
                        type="number"
                        required
                        onChange={(value) => this.onChangeAnzahl(value)}
                      />
                    </FormGroup>
                  </div>
                  <div className="mb10-666">
                    <FormGroup className="productDetail-formGroup EndformatBg">
                      <ControlLabel>Kissenfarbe:</ControlLabel>
                      <SelectPicker
                        style={{ width: "100%", float: "right" }}
                        onChange={(e) => this.onChange("pillowColorId", e)}
                        name="pillowColorId"
                        value={pillowColorId}
                        data={pillowColor}
                        required
                        placeholder="Kissenfarbe"
                        accepter={SelectPicker}
                      />
                    </FormGroup>
                  </div>
                  <div className="mb10-666">
                    <FormGroup className="productDetail-formGroup DruckBg">
                      <ControlLabel>Rund:</ControlLabel>
                      <SelectPicker
                        searchable={false}
                        onChange={(e) => this.onChange("isRound", e)}
                        name="isRound"
                        data={BooleanOptions}
                        required
                        placeholder="Rund"
                        accepter={SelectPicker}
                        value={isRound}
                      />
                    </FormGroup>
                  </div>
                  <div className="mb10-666">
                    <FormGroup className="productDetail-formGroup DruckBg">
                      <ControlLabel style={{ float: "left" }}>Complete:</ControlLabel>
                      <SelectPicker
                        searchable={false}
                        style={{ width: "100%", float: "right" }}
                        onChange={(e) => this.onChange("isComplete", e)}
                        className="details-Druck"
                        name="isComplete"
                        data={BooleanOptions}
                        required
                        placeholder="Complete"
                        accepter={SelectPicker}
                        value={isComplete}
                      />
                    </FormGroup>
                  </div>

                  <div className="mb10-666">
                    {art && art.length ? (
                      <FormGroup className="productDetail-formGroup MaterialBg">
                        <ControlLabel className="details-Material-label">Art:</ControlLabel>
                        <SelectPicker
                          onChange={(e) => this.onChange("materialId", e)}
                          name="materialId"
                          data={art}
                          required
                          placeholder="Material"
                          accepter={SelectPicker}
                          value={artId}
                        />
                      </FormGroup>
                    ) : (
                      <div className="">
                        {/* <Loader /> */}
                        <CustomLoader />
                      </div>
                    )}
                  </div>
                </div>
              </Form>
            </>
          ) : (
            <>
              <Form
                onCheck={(formError1) => {
                  this.setState({ formError1 })
                }}
                ref={(ref) => (this.form1 = ref)}
                formValue={this.state.initialValues}
                model={model1}
                layout="horizontal"
                fluid
              >
                <div className="data-upload__content">
                  <div className="data-upload__title">Ihre Datei(en) hochladen</div>
                  <div className="data-upload__explane">
                    Bitte laden Sie ausschließlich geschlossene Dateiformate hoch: PDF, JPG, JPEG, PNG, TIFF, EPS
                  </div>
                  <div className="data-upload__file">
                    <div className="data-upload__button">
                      <div className="data-upload__button">
                        <FileInput name="file1" id="file" required onChange={this.handleChangeFileOne} />
                      </div>
                      <div className="data-upload__button">
                        <FileInput name="file2" id="file" onChange={this.handleChangeFileTwo} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main2-buy-child2">
                  <div className="data-upload__describe-title">Beschreibung</div>
                  <FormControl
                    onChange={(e) => this.onChange("description", e)}
                    className="data-upload__describe-area"
                    name="description"
                    rows={10}
                    cols={70}
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
                    Details zur Datenverwendung und unseren Dienstleistern können Sie unserer
                    <span
                      onClick={() => this.setState({ showDatenschutzerklärung: true })}
                      style={{ padding: "5px", color: "blue", textDecoration: "underline" }}
                    >
                      Datenschutzerklärung
                    </span>
                    entnehmen.
                  </Checkbox>
                </CheckboxGroup>
                <Datenschutzerklärung
                  show={this.state.showDatenschutzerklärung}
                  handleClose={() => this.setState({ showDatenschutzerklärung: false })}
                />
              </Form>
            </>
          )}

          <div className="product__button flex-j-s">
            {steps === "step1" ? (
              <Button onClick={() => this.handleStep(2)} appearance="primary" disabled={loadingPage || !artId}>
                nächste Stufe
              </Button>
            ) : percent > 0 ? (
              <TeleLoader percent={percent} />
            ) : (
              <Button onClick={this.handleSubmit} appearance="primary">
                Zum Warenkorb
              </Button>
            )}

            <Button onClick={() => this.handleStep(1)} disabled={steps === "step1"}>
              Vorherige Stufe
            </Button>
          </div>
        </div>
      </>
    )
  }
}
