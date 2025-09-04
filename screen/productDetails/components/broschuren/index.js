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
  Checkbox,
  CheckboxGroup,
  Input,
  HelpBlock,
  Divider
} from "rsuite"

import { emit } from "jetemit"

import Link from "next/link"

import { brochure } from "../../../../api/Api"
import CustomLoader from "../../../../components/costomLoader"
import FileInput from "../../../../components/fileInput"
import Datenschutzerklärung from "../../../datenschutzerklarung/model"
import { TeleLoader } from "../components/Progress"
import LoginModal from "../../../auth/login/model"
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

export default class Product extends Component {
  state = {
    steps: 1,
    pageCountOptions: [],
    processing: false,
    progress: false,
    percent: 0,
    src1: "",
    src2: "",
    materialId_Umschlag: "",
    cellophaneType: [
      {
        label: "Matt",
        value: "Matt"
      },
      { label: "glänzend", value: "glänzend" }
    ],
    shipment: [{ label: "Abholen", value: "pickup" }],
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
    material_Umschlag: [],

    material_Kern: [],
    materialShow_Umschlag: false,
    materialShow_Kern: false,
    showLogin: false,

    initialValues: {
      width: "",
      height: "",
      count: 1,
      description: "",
      Umschlag: { pageCount: 4, isCellophane: false, cellophaneType: "Matt", colorful: true, doubleSided: true, materialId: "" },
      Kern: { isCellophane: false, cellophaneType: "Matt", colorful: true, doubleSided: true, materialId: "", pageCount: 4 },
      firstName: "",
      lastName: "",
      postalCode: "",
      country: "",
      email: "",
      gender: "",
      address: "",
      street: "",
      phoneNumber: ""
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
    endFormatId: "",
    total: 0
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
    this.pageCountMaker()
    this.getEndFormat()
  }

  pageCountMaker = async () => {
    let pageOptions = []
    for (let index = 4; index <= 80; index = index + 4) {
      pageOptions = [...pageOptions, { label: index, value: index }]
    }

    this.setState({ pageCountOptions: pageOptions })
  }

  getEndFormat = async () => {
    this.setState({ loadingPage: true, percent: 0 })
    try {
      const { data } = await brochure.Brochure_EndFormat()
      let newData = []
      data.data.forEach((element) => {
        newData = [
          ...newData,
          {
            label: element.key,
            value: element.id
          }
        ]
      })

      await this.setState({
        endFormat: newData,
        endFormatId: newData[0].value,

        initialValues: {
          ...this.state.initialValues,
          endFormatId: newData[0].value
        }
      })
      await Promise.all([this.getMaterial_Umschlag(), this.getMaterial_Kern()])
    } catch (error) {
      console.error(error)
    }
    this.setState({ loadingPage: false })
  }

  onChangeEndFormat = async (name, value) => {
    await this.setState({
      endFormatId: value,
      initialValues: {
        ...this.state.initialValues,
        endFormatId: value,

        material: []
      }
    })
    await this.getMaterial_Umschlag()
    await this.getMaterial_Kern()
    this.handleTotal()
  }

  onChange_Umschlag = async (name, value) => {
    await this.setState({
      initialValues: {
        ...this.state.initialValues,
        Umschlag: { ...this.state.initialValues.Umschlag, [name]: value }
      }
    })
    if (name !== "materialId") {
      await this.getMaterial_Umschlag()
    } else {
      await this.setState({ materialId: value })
      this.handleTotal()
    }
  }

  onChange_Kern = async (name, value) => {
    await this.setState({
      initialValues: {
        ...this.state.initialValues,
        Kern: { ...this.state.initialValues.Kern, [name]: value }
      }
    })
    if (name !== "materialId") {
      await this.getMaterial_Kern()
      this.handleTotal()
    } else {
      await this.setState({ materialId: value })
      this.handleTotal()
    }
  }

  onChange = async (name, value) => {
    await this.setState({
      initialValues: {
        ...this.state.initialValues,
        [name]: value
      }
    })
    this.handleTotal()
  }
  onChangeAnzahl = async (value) => {
    await this.setState({
      initialValues: {
        ...this.state.initialValues,
        count: value
      }
    })
    if (Number(value) > 0) {
      await this.getMaterial_Umschlag()
      await this.getMaterial_Kern()
      this.handleTotal()
    } else {
      this.setState({
        material_Umschlag: [],
        material_Kern: []
      })
      this.handleTotal()
    }
  }
  handleTotal = () => {
    const findKern = this.state.material_Kern.find((x) => x.value === this.state.initialValues.Kern.materialId)
    const findUmschlagn = this.state.material_Umschlag.find((x) => x.value === this.state.initialValues.Umschlag.materialId)
    const total = (findKern?.price || 0) + (findUmschlagn?.price || 0)
    console.log(total)
    this.setState({ total: total })
  }
  umschlag_debounceTimeout
  Kern_debounceTimeout

  getMaterial_Umschlag = async () => {
    const materialId_Umschlag =
      this.state.initialValues?.Umschlag?.materialId && this.state.initialValues?.Umschlag?.materialId !== ""
        ? this.state.initialValues?.Umschlag?.materialId
        : null

    clearTimeout(this.umschlag_debounceTimeout)
    this.umschlag_debounceTimeout = setTimeout(async () => {
      try {
        this.setState({ material_Umschlag: [], materialShow_Umschlag: false })
        const { data, status } = await brochure.BrochureMaterial_Umschlag(this.state.initialValues)
        if (status === 204) {
          this.open("error", "Warnung", "Zellophanieren ist bei Broschüren nur bis 16 Seiten und ab 160g-Papier möglich.")
          await this.setState({
            initialValues: {
              ...this.state.initialValues,
              Umschlag: {
                ...this.state.initialValues.Umschlag,
                materialId: ""
              }
            },
            material_Umschlag: [],
            materialId_Umschlag: ""
          })
          this.handleTotal()

          return
        }
        let newData = []

        data.data.forEach((element) => {
          newData = [
            ...newData,
            {
              label: element.key + "  € " + element.price + ",- inkl. 20% USt.",
              value: element.id,
              price: element.price
            }
          ]
        })
        const materialSelected = newData[0].value
        const foundMaterial = newData.find((x) => x.value === materialId_Umschlag)
        await this.setState({
          initialValues: {
            ...this.state.initialValues,
            Umschlag: {
              ...this.state.initialValues.Umschlag,
              materialId: materialId_Umschlag && foundMaterial ? materialId_Umschlag : materialSelected
            }
          },
          material_Umschlag: newData,
          materialId_Umschlag: materialId_Umschlag ? materialId_Umschlag : materialSelected,
          materialShow_Umschlag: true
        })
        this.handleTotal()

        return
      } catch (error) {
        console.error(error)
      }
    }, 500)
  }

  getMaterial_Kern = async () => {
    const materialId_Kern =
      this.state.initialValues?.Kern?.materialId && this.state.initialValues?.Kern?.materialId !== ""
        ? this.state.initialValues?.Kern?.materialId
        : null
    clearTimeout(this.Kern_debounceTimeout)
    this.Kern_debounceTimeout = setTimeout(async () => {
      try {
        this.setState({ material: [], materialShow: false })
        const { data, status } = await brochure.BrochureMaterial_Kern(this.state.initialValues)
        if (status === 204) {
          this.open("error", "Warnung", "Zellophanieren ist bei Broschüren nur bis 16 Seiten und ab 160g-Papier möglich.")
          await this.setState({
            initialValues: {
              ...initialValues,
              Kern: {
                ...initialValues.Kern,
                materialId: ""
              }
            },
            material_Kern: [],
            materialId_Kern: ""
          })
          this.handleTotal()

          return
        }
        let newData = []
        data.data.forEach((element) => {
          newData = [
            ...newData,
            {
              label: element.key + "  € " + element.price + ",- inkl. 20% USt.",
              value: element.id,
              price: element.price
            }
          ]
        })
        const materialSelected = newData[0].value
        const foundMaterial = newData.find((x) => x.value === materialId_Kern)
        await this.setState({
          initialValues: {
            ...this.state.initialValues,
            Kern: {
              ...this.state.initialValues.Kern,
              materialId: materialId_Kern && foundMaterial ? materialId_Kern : materialSelected
            }
          },
          material_Kern: newData,
          materialId_Kern: materialId_Kern ? materialId_Kern : materialSelected,
          materialShow_Kern: true
        })
        this.handleTotal()
      } catch (error) {
        console.error(error)
      }
    }, 500)
  }

  handleStep = async (step) => {
    if (step === 1) {
      this.getMaterial_Umschlag()
      this.getMaterial_Kern()
      this.setState({ steps: step })
      this.props.setStep(step)
      return
    }
    const token = localStorage.getItem("token")
    if (!token) {
      this.handleLogin(true)
      this.open("error", "error", "Bitte anmelden")
      return
    }

    if (step === 2) {
      this.setState({ steps: step })
      this.props.setStep(step)
    }
  }

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
    const { initialValues } = this.state
    if (hasError) {
      return
    }
    const sendDate = {
      ...initialValues,
      Umschlag: JSON.stringify(initialValues.Umschlag),
      Kern: JSON.stringify(initialValues.Kern)
    }

    try {
      if (!initialValues.file1 && !initialValues.file2) {
        return this.open("error", "Warnung", "Datei 1 ist erforderlich")
      }
      if (!this.state.checkDatenverwendung.length) {
        return this.open("error", "Warnung", "check Datenverwendung is requierd")
      }
      this.setState({ loadingRecord: true, progress: true })
      const { data } = await brochure.Brochure_Record(sendDate, this.loaderPercentage)
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
      console.log(error)
      this.open("error", "Warnung", "Es ist ein Problem aufgetreten. Bitte versuchen Sie es erneut.")
    }
    this.setState({ loadingRecord: false, percent: 0 })
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
      materialShow_Kern,
      materialShow_Umschlag,
      material_Umschlag,
      material_Kern,
      percent,
      showLogin,
      cellophaneType,
      total,
      initialValues,
      endFormatId,
      materialId_Umschlag,
      materialId_Kern,

      pageCountOptions,
      loadingPage
    } = this.state
    return (
      <>
        <LoginModal handleClose={() => this.handleLogin(false)} show={showLogin} />
        <div className="product-order">
          {loadingPage ? (
            <CustomLoader />
          ) : steps === 1 ? (
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
                      <FormGroup className="productDetail-formGroup AnzahlBg">
                        <ControlLabel>Gesamtbetrag:</ControlLabel>
                        <Input placeholder="Gesamtbetrag" value={`€ ${total}, -inkl. 20% USt.`} name="Gesamtbetrag" type="text" disabled />
                      </FormGroup>
                    </div>
                    <Divider>Umschlag:</Divider>
                    <div className="mb10-666">
                      <FormGroup className="productDetail-formGroup DruckBg">
                        <ControlLabel>Druck:</ControlLabel>
                        <SelectPicker
                          searchable={false}
                          onChange={(e) => this.onChange_Umschlag("doubleSided", e)}
                          name="doubleSided"
                          data={doubleSided}
                          required
                          placeholder="Druck"
                          accepter={SelectPicker}
                          value={initialValues.Umschlag.doubleSided}
                        />
                      </FormGroup>
                    </div>
                    <div className="mb10-666">
                      <FormGroup className="productDetail-formGroup FarbigkeitBg">
                        <ControlLabel>Farbigkeit:</ControlLabel>
                        <SelectPicker
                          searchable={false}
                          onChange={(e) => this.onChange_Umschlag("colorful", e)}
                          name="colorful"
                          data={colorful}
                          required
                          placeholder="Farbigkeit"
                          accepter={SelectPicker}
                          value={initialValues?.Umschlag?.colorful}
                        />
                      </FormGroup>
                    </div>
                    <div className="mb10-666">
                      <FormGroup className="productDetail-formGroup ZellophanBg">
                        <ControlLabel style={{ float: "left" }}>Zellophan:</ControlLabel>
                        <SelectPicker
                          searchable={false}
                          onChange={(e) => this.onChange_Umschlag("isCellophane", e)}
                          name="isCellophane"
                          className="details-Zellophan"
                          data={isCellophane}
                          required
                          placeholder="Zellophan"
                          accepter={SelectPicker}
                          value={initialValues?.Umschlag?.isCellophane}
                        />
                      </FormGroup>
                    </div>
                    <div className="mb10-666">
                      {initialValues.Umschlag.isCellophane ? (
                        <FormGroup className="productDetail-formGroup ZellophanBg">
                          <ControlLabel>Zellophan:</ControlLabel>
                          <SelectPicker
                            searchable={false}
                            onChange={(e) => this.onChange_Umschlag("cellophaneType", e)}
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
                      {materialShow_Umschlag ? (
                        <FormGroup className="productDetail-formGroup MaterialBg">
                          <ControlLabel>Material:</ControlLabel>
                          <SelectPicker
                            onChange={(e) => this.onChange_Umschlag("materialId", e)}
                            name="materialId"
                            data={material_Umschlag}
                            required
                            placeholder="Material"
                            accepter={SelectPicker}
                            value={initialValues?.Umschlag?.materialId}
                          />
                        </FormGroup>
                      ) : (
                        <div className="">
                          {/* <Loader /> */}
                          <CustomLoader />
                        </div>
                      )}
                    </div>
                    <Divider>Kern / Innenseiten:</Divider>
                    <div className="mb10-666">
                      <FormGroup className="productDetail-formGroup EndformatBg">
                        <ControlLabel>Innenseiten:</ControlLabel>
                        <SelectPicker
                          onChange={(e) => this.onChange_Kern("pageCount", e)}
                          name="pageCount"
                          value={initialValues?.Kern?.pageCount}
                          data={pageCountOptions}
                          required
                          placeholder="Innenseiten"
                          accepter={SelectPicker}
                        />
                      </FormGroup>
                    </div>
                    {/* {initialValues.count === 5000 ? (
                      <HelpBlock style={{ textAlign: "right" }}>
                        <span style={{ color: "red", maxWidth: 467, alignSelf: "end" }}>
                          Wenn Sie mehr als 5000 Stück dieses Produkts bestellen möchten, wenden Sie sich bitte an die Anfrageabteilung
                        </span>
                      </HelpBlock>
                    ) : (
                      ""
                    )} */}
                  </div>

                  <div className="mb10-666">
                    <FormGroup className="productDetail-formGroup FarbigkeitBg">
                      <ControlLabel>Farbigkeit:</ControlLabel>
                      <SelectPicker
                        searchable={false}
                        onChange={(e) => this.onChange_Kern("colorful", e)}
                        name="colorful"
                        data={colorful}
                        required
                        placeholder="Farbigkeit"
                        accepter={SelectPicker}
                        value={initialValues?.Kern.colorful}
                      />
                    </FormGroup>
                  </div>
                  <div className="mb10-666">
                    <FormGroup className="productDetail-formGroup ZellophanBg">
                      <ControlLabel style={{ float: "left" }}>Zellophan:</ControlLabel>
                      <SelectPicker
                        searchable={false}
                        onChange={(e) => this.onChange_Kern("isCellophane", e)}
                        name="isCellophane"
                        className="details-Zellophan"
                        data={isCellophane}
                        required
                        placeholder="Zellophan"
                        accepter={SelectPicker}
                        value={initialValues?.Kern.isCellophane}
                      />
                    </FormGroup>
                  </div>
                  <div className="mb10-666">
                    {initialValues.isCellophane ? (
                      <FormGroup className="productDetail-formGroup ZellophanBg">
                        <ControlLabel>Zellophan:</ControlLabel>
                        <SelectPicker
                          searchable={false}
                          onChange={(e) => this.onChange_Kern("cellophaneType", e)}
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
                    {materialShow_Kern ? (
                      <FormGroup className="productDetail-formGroup MaterialBg">
                        <ControlLabel>Material:</ControlLabel>
                        <SelectPicker
                          onChange={(e) => this.onChange_Kern("materialId", e)}
                          name="materialId"
                          data={material_Kern}
                          required
                          placeholder="Material"
                          accepter={SelectPicker}
                          value={initialValues?.Kern?.materialId}
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
            {steps === 1 ? (
              <Button
                onClick={() => this.handleStep(2)}
                appearance="primary"
                disabled={loadingPage || !materialShow_Kern || !materialId_Umschlag || !materialId_Kern}
              >
                nächste Stufe
              </Button>
            ) : percent > 0 ? (
              <TeleLoader percent={percent} />
            ) : (
              <Button onClick={this.handleSubmit} appearance="primary">
                Zum Warenkorb
              </Button>
            )}

            <Button onClick={() => this.handleStep(1)} disabled={steps === 1}>
              Vorherige Stufe
            </Button>
          </div>
        </div>
      </>
    )
  }
}
