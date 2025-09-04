import React, { Component, Fragment } from "react"
import Sidebar from "../sidbar"
import Link from "next/link"
import {
  Form,
  FormGroup,
  Notification,
  FormControl,
  Schema,
  // Loader,
  Progress,
  SelectPicker,
  Input,
  Button,
  Modal,
  ControlLabel
  // SelectPicker,
} from "rsuite"
const { StringType, NumberType } = Schema.Types
import { address } from "../../../../api/Api"
const model = Schema.Model({
  name: StringType().isRequired("This field is required."),
  postalCode: NumberType("Please enter a valid number.").isRequired("PLZ is required.")
  // country: StringType().isRequired("Land field is required."),
  // street: StringType().isRequired("Straße & Hausnummer field is required."),
  // address: StringType().isRequired("Ort field is required."),
})
export default class gride extends Component {
  state = {
    initialValue: {
      name: "",
      postalCode: "",
      country: "",
      street: "",
      address: ""
    },
    page: "address"
  }

  componentDidMount() {
    this.getAddress()
  }
  getAddress = async () => {
    try {
      const { data, status } = await address.getAll()
      if (status !== 200) {
        this.setState({ addressData: [] })
        return
      }
      this.setState({ addressData: data.data, activeAddress: data.data[0].id })
    } catch (error) {
      console.error(error)
    }
  }

  open = (funcName, title, message) => {
    Notification[funcName]({
      title: title,
      description: <div style={{ color: "black" }}>{message}</div>
    })
  }

  open = (funcName, title, message) => {
    Notification[funcName]({
      title: title,
      description: <div style={{ color: "black" }}>{message}</div>
    })
  }

  onChange = async (name, value) => {
    await this.setState({
      initialValue: { ...this.state.initialValue, [name]: value }
    })
  }
  handleSubmitAddress = async () => {
    try {
      await address.create(this.state.initialValue)
      this.open("success", "Erfolgreich", "Ihre Adresse wurde hinzugefügt.")
      this.getAddress()
      this.handleClose()
    } catch (error) {
      console.log(error)
      this.open("error", "Warnung", "Es ist ein Problem aufgetreten. Bitte versuchen Sie es erneut.")
    }
  }
  handleClose = () => {
    this.setState({ showAddressModal: false })
  }
  handleDeleteAddress = async (id) => {
    try {
      await address.deleteAddress(id)
      this.open("success", "Erfolgreich", "Ihre Adresse wurde gelöscht.")
      this.getAddress()
      this.handleClose()
    } catch (error) {
      console.log(error)
      this.open("error", "Warnung", "Es ist ein Problem aufgetreten. Bitte versuchen Sie es erneut.")
    }
  }
  handleChangePage = (page) => {
    this.setState({ page })
  }
  render() {
    const {
      redirect,
      loadingButtom,
      progress,
      percent,
      showEdit,
      initialValue,
      showAddressModal,
      addressData,
      // gender,
      // country,initialValue
      page
    } = this.state
    return (
      <Fragment>
        <main>
          <div className="main2-dashB flex-j-c w-100">
            <div className="main2-dashB-dad w-90">
              <div className="main2-dashB-left">
                <Sidebar page={page} />
              </div>
              <main className="w-100 min-height-60">
                <Modal size="xs" full show={showAddressModal} onHide={this.close}>
                  <Modal.Header>Add Address</Modal.Header>
                  <Modal.Body>
                    <Form
                      onCheck={(formError) => {
                        this.setState({ formError })
                      }}
                      ref={(ref) => (this.form1 = ref)}
                      formValue={initialValue}
                      model={model}
                      layout="horizontal"
                      fluid
                    >
                      <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
                        <FormGroup className="marg-right20 head1-dad-down-right-inpt-anzahl flex">
                          <ControlLabel>title:</ControlLabel>
                          <FormControl
                            className=""
                            placeholder="title"
                            name="name"
                            type="text"
                            required
                            onChange={(e) => this.onChange("name", e)}
                            style={{ width: "100%" }}
                          />
                        </FormGroup>
                      </div>
                      <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
                        <FormGroup className="marg-right20 head1-dad-down-right-inpt-anzahl flex">
                          <ControlLabel>PLZ:</ControlLabel>
                          <FormControl
                            className=""
                            placeholder="PLZ"
                            name="postalCode"
                            type="number"
                            required
                            onChange={(e) => this.onChange("postalCode", e)}
                            style={{ width: "100%" }}
                          />
                        </FormGroup>
                      </div>
                      {/* <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
                        <FormGroup className="marg-right20 head1-dad-down-right-inpt-anzahl flex">
                          <ControlLabel>Land:</ControlLabel>
                          <FormControl
                            className=""
                            placeholder="Land"
                            name="country"
                            type="text"
                            required
                            onChange={(e) => this.onChange("country", e)}
                            style={{ width: "100%" }}
                          />
                        </FormGroup>
                      </div> */}
                      <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
                        <FormGroup className="marg-right20 head1-dad-down-right-inpt-anzahl flex">
                          <ControlLabel>Ort:</ControlLabel>
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
                        <FormGroup className="marg-right20 head1-dad-down-right-inpt-anzahl flex">
                          <ControlLabel>Straße & Hausnummer:</ControlLabel>
                          <FormControl
                            className=""
                            placeholder="Straße & Hausnummer"
                            name="street"
                            type="text"
                            required
                            onChange={(e) => this.onChange("street", e)}
                            style={{ width: "100%" }}
                          />
                        </FormGroup>
                      </div>

                      {/* <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
                <FormGroup className="marg-right20 head1-dad-down-right-inpt-anzahl flex">
                  <ControlLabel>State:</ControlLabel>
                  <FormControl
                    className=""
                    placeholder="State"
                    name="state"
                    type="text"
                    required
                    onChange={(e) => this.onChange("state", e)}
                    style={{ width: "100%" }}
                  />
                </FormGroup>
              </div> */}
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button color="green" onClick={this.handleSubmitAddress} appearance="primary">
                      Bestätigen
                    </Button>
                    <Button color="red" onClick={this.handleClose} appearance="subtle">
                      close
                    </Button>
                  </Modal.Footer>
                </Modal>

                {addressData?.length ? (
                  addressData.map((x, i) => {
                    return (
                      <div key={i} className="w-100 flex-center">
                        <div className="cart-address__info margin-top-50">
                          <div className={`cart-address__info-details flex-space-btw `}>
                            <div>
                              <div className=" flex">
                                <div className="cart-address__info-title white-color">Name des Empfängers:</div>
                                <div className="cart-address__info-text white-color ">{x.name}</div>
                              </div>
                              <div className="cart-address__info-text white-color margin-left-0 ">{x.address}</div>
                            </div>
                            <div className="cart-address__info-select"></div>
                          </div>
                          <div className="cart-address__info-details flex-space-btw cart-address__info-details-bg-color">
                            <div className="cart-address__info-section flex ">
                              <div className="cart-address__info-title">Postleitzahl:</div>
                              <div className="cart-address__info-text">{x.postalCode}</div>
                            </div>
                            <div className="cart-address__edit-section flex-space-btw">
                              {/* <div className="cart-address__edit-address flex">
                          <div>
                            <span>Adresse bearbeiten</span>
                          </div>
                          <div>
                            <i className="mdi mdi-pencil"></i>
                          </div>
                        </div> */}
                              <div onClick={() => this.handleDeleteAddress(x.id)} className="cart-address__delete-address flex">
                                <div>
                                  <span>Adresse delete</span>
                                </div>
                                <div>
                                  <i className="mdi mdi-delete-outline"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })
                ) : (
                  <>
                    <div className="w-100 flex-center">
                      <div style={{ textAlign: "center" }} className="cart-address__info margin-top-50">
                        there is no address
                      </div>
                    </div>
                  </>
                )}
                <div className="cart__add-new-address flex-center w-100 ">
                  <Button
                    onClick={() => {
                      this.setState({ showAddressModal: true })
                    }}
                  >
                    <i className="mdi mdi-map-marker-outline"></i>
                    <span> Versand-Adresse hinzufügen</span>
                  </Button>
                </div>
              </main>
            </div>
          </div>
        </main>
      </Fragment>
    )
  }
}
