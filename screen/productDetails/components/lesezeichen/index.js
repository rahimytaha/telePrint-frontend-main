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
  Input,
  HelpBlock
} from "rsuite"
import Cookies from "universal-cookie"
import { emit } from "jetemit"

import Link from "next/link"

import { Lesezeichen } from "../../../../api/Api"
import CustomLoader from "../../../../components/costomLoader"
import ModalForm from "../../../../components/modal"
import FileInput from "../../../../components/fileInput"
import LoginModal from "../../../auth/login/model"
import Datenschutzerklärung from "../../../datenschutzerklarung/model"
import { TeleLoader } from "../components/Progress"
const { StringType, NumberType, BooleanType } = Schema.Types
const model = Schema.Model({
  // email: StringType()
  //   .isEmail("Please enter a valid email address.")
  //   .isRequired("This field is required."),
  count: NumberType("Please enter a valid number.").min(1, "Minimum 1").isRequired("This field is required."),
  width: NumberType().isRequired("Endformat is required."),
  materialId: StringType().isRequired("material is required."),
  doubleSided: BooleanType().isRequired("doubleSided field is required."),
  isCellophane: BooleanType().isRequired("isCellophane field is required."),
  colorful: BooleanType().isRequired("colorful field is required.")
})

const model1 = Schema.Model({
  email: StringType().isEmail("Please enter a valid email address.").isRequired("email is required."),
  phoneNumber: StringType().isRequired("Telefonnummer is required.")
})
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
      width: "",
      height: "",
      count: 200,
      isCellophane: false,
      colorful: true,
      doubleSided: true,
      description: "",
      customertype: "",
      firstName: "",
      lastName: "",
      postalCode: "",
      country: "",
      email: "",
      gender: "",
      address: "",
      street: "",
      phoneNumber: "",
      cellophaneType: "Matt",
      shipment: "pickup"
    },
    formError: {},
    formError1: {},
    loading: false,
    loading1: false,
    loadingRecord: false,
    show: false,
    materialShow: false,
    materialId: "",
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

  componentDidMount() {
    this.getEndFormat()
  }

  getEndFormat = async () => {
    this.setState({ loadingPage: true, percent: 0 })
    try {
      const { data } = await Lesezeichen.getAllEndFormat()
      let newData = []
      data.data.forEach((element) => {
        newData = [
          ...newData,
          {
            label: element.key,
            value: element.width.toString() + "*" + element.height.toString()
          }
        ]
      })

      await this.setState({
        endFormat: newData,
        endFormatId: "55*173",

        initialValues: {
          ...this.state.initialValues,
          width: "55",
          height: "137"
        }
      })
      this.getMaterial()
    } catch (error) {
      console.error(error)
    }
    this.setState({ loadingPage: false })
  }

  onChangeEndFormat = async (name, value) => {
    let strWidth = value && value.substring(0, value.indexOf("*"))
    let strHeight = value && value.split("*")[1]
    await this.setState({
      endFormatId: value,
      initialValues: {
        ...this.state.initialValues,
        width: strWidth,
        height: strHeight,
        material: []
      }
    })
    this.getMaterial()
  }

  onChangeMaterialId = async (name, value) => {
    await this.setState({
      initialValues: {
        ...this.state.initialValues,
        [name]: value
      }
    })
    this.getMaterial()
  }

  onChange = async (name, value) => {
    await this.setState({
      initialValues: {
        ...this.state.initialValues,
        [name]: value
      }
    })
    if (name !== "materialId") {
      this.getMaterial()
    }

    if (name === "materialId") {
      localStorage.setItem("materialFlyerId", value)
      await this.setState({ materialId: value })
    }

    if (name === "isCellophane") {
      await this.setState({ materialShow: true })
      this.getMaterial()
    }
  }
  onChangeAnzahl = async (value) => {
    await this.setState({
      initialValues: {
        ...this.state.initialValues,
        count: value
      }
    })
    if (Number(value) > 0) {
      this.getMaterial()
    } else {
      this.setState({ material: [] })
    }
  }

  debounceTimeout
  getMaterial = async () => {
    const { materialId } = this.state
    clearTimeout(this.debounceTimeout)
    this.debounceTimeout = setTimeout(async () => {
      try {
        this.setState({ material: [], materialShow: false })
        const { data } = await Lesezeichen.digiPrintMaterial(this.state.initialValues)
        let newData = []
        data.data.forEach((element) => {
          newData = [
            ...newData,
            {
              label: element.key + "  € " + element.price + ",- inkl. 20% USt.",
              value: element.id
            }
          ]
        })

        const materialSelected = data.data.filter((x) => x.key === "350g Color Copy")

        await this.setState({
          initialValues: {
            ...this.state.initialValues,
            materialId: materialId ? materialId : materialSelected && materialSelected[0] && materialSelected[0].id
          },
          material: newData,
          materialId: materialId ? materialId : materialSelected && materialSelected[0] && materialSelected[0].id,
          materialShow: true
        })
        // const materialIdSelectedByCx =
        //   localStorage.getItem("materialFlyerId") || "62d7bb3fcbddc420642ad38a";

        // const materialSelected = data.data.filter(
        //   (x) => x.id === materialIdSelectedByCx
        // );

        // await this.setState({
        //   initialValues: {
        //     ...this.state.initialValues,
        //     materialId:
        //       materialSelected && materialSelected[0] && materialSelected[0].id,
        //   },
        //   material: newData,
        //   materialId:
        //     materialSelected && materialSelected[0] && materialSelected[0].id,
        //   materialShow: true,
        // });
      } catch (error) {
        console.error(error)
      }
    }, 500)
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

    await this.setState({
      initialValues: {
        ...this.state.initialValues,
        customertype: personalData.customertype,
        firstName: personalData.firstName,
        lastName: personalData.lastName,
        postalCode: personalData.postalCode,
        country: personalData.country,
        email: personalData.email,
        gender: personalData.gender,
        address: personalData.address,
        street: personalData.street,
        phoneNumber: personalData.phoneNumber,
        materialId: this.state.materialId
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
      const { data } = await Lesezeichen.record(this.state.initialValues, this.loaderPercentage)
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
      this.getMaterial()
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
      endFormat,
      doubleSided,
      colorful,
      isCellophane,
      steps,
      material,
      materialShow,
      // loadingRecord,
      loading,
      loading1,
      image2,
      progress,
      percent,
      show,
      cellophaneType,
      shipment,
      initialValues,
      endFormatId,
      materialId,
      showLogin,
      loadingPage
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
                model={model}
                layout="horizontal"
                fluid
              >
                <div>
                  <div className="mb10-666">
                    {initialValues.count === 5000 ? (
                      <HelpBlock style={{ textAlign: "right" }}>
                        <span style={{ color: "red", maxWidth: 467, alignSelf: "end" }}>
                          Wenn Sie mehr als 5000 Stück dieses Produkts bestellen möchten, wenden Sie sich bitte an die Anfrageabteilung
                        </span>
                      </HelpBlock>
                    ) : (
                      ""
                    )}
                    <FormGroup className="productDetail-formGroup AnzahlBg">
                      <ControlLabel>Anzahl:</ControlLabel>
                      <Input
                        placeholder="Anzahl"
                        value={initialValues.count}
                        name="count"
                        type="number"
                        required
                        onChange={(value) => this.onChangeAnzahl(value)}
                      />
                    </FormGroup>
                  </div>
                  <div className="mb10-666">
                    <FormGroup className="productDetail-formGroup EndformatBg">
                      <ControlLabel>Endformat:</ControlLabel>
                      <SelectPicker
                        onChange={(e) => this.onChangeEndFormat("endFormatId", e)}
                        name="endFormatId"
                        value={endFormatId}
                        data={endFormat}
                        required
                        placeholder="Endformat"
                        accepter={SelectPicker}
                      />
                    </FormGroup>
                  </div>
                  <div className="mb10-666">
                    <FormGroup className="productDetail-formGroup DruckBg">
                      <ControlLabel>Druck:</ControlLabel>
                      <SelectPicker
                        searchable={false}
                        onChange={(e) => this.onChange("doubleSided", e)}
                        name="doubleSided"
                        data={doubleSided}
                        required
                        placeholder="Druck"
                        accepter={SelectPicker}
                        value={initialValues.doubleSided}
                      />
                    </FormGroup>
                  </div>
                  <div className="mb10-666">
                    <FormGroup className="productDetail-formGroup FarbigkeitBg">
                      <ControlLabel>Farbigkeit:</ControlLabel>
                      <SelectPicker
                        searchable={false}
                        onChange={(e) => this.onChange("colorful", e)}
                        name="colorful"
                        data={colorful}
                        required
                        placeholder="Farbigkeit"
                        accepter={SelectPicker}
                        value={initialValues.colorful}
                      />
                    </FormGroup>
                  </div>
                  <div className="mb10-666">
                    <FormGroup className="productDetail-formGroup ZellophanBg">
                      <ControlLabel style={{ float: "left" }}>Zellophan:</ControlLabel>
                      <SelectPicker
                        searchable={false}
                        onChange={(e) => this.onChange("isCellophane", e)}
                        name="isCellophane"
                        className="details-Zellophan"
                        data={isCellophane}
                        required
                        placeholder="Zellophan"
                        accepter={SelectPicker}
                        value={initialValues.isCellophane}
                      />
                    </FormGroup>
                  </div>
                  <div className="mb10-666">
                    {initialValues.isCellophane ? (
                      <FormGroup className="productDetail-formGroup ZellophanBg">
                        <ControlLabel>Zellophan:</ControlLabel>
                        <SelectPicker
                          searchable={false}
                          onChange={(e) => this.onChange("cellophaneType", e)}
                          defaultValue={cellophaneType[0].value}
                          name="cellophaneType"
                          className=""
                          data={cellophaneType}
                          required
                          placeholder="cellophaneType"
                          accepter={SelectPicker}
                        />
                      </FormGroup>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="mb10-666">
                    {materialShow ? (
                      <FormGroup className="productDetail-formGroup MaterialBg">
                        <ControlLabel>Material:</ControlLabel>
                        <SelectPicker
                          onChange={(e) => this.onChange("materialId", e)}
                          name="materialId"
                          data={material}
                          required
                          placeholder="Material"
                          accepter={SelectPicker}
                          value={materialId}
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

                  <div className="data-upload__button">
                    <div className="data-upload__button">
                      <FileInput name="file1" id="file" required onChange={this.handleChangeFileOne} />
                    </div>
                    <div className="data-upload__button">
                      <FileInput name="file2" id="file" onChange={this.handleChangeFileTwo} />
                    </div>
                    +
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
              <Button onClick={() => this.handleStep(2)} appearance="primary" disabled={loadingPage || !materialShow}>
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
