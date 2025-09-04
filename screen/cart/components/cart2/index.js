/** @format */

import React, { Component } from "react"
import { Input, Button, Modal, FormGroup, Form, FormControl, ControlLabel, SelectPicker, Schema, Notification, Radio } from "rsuite"
//api

import { address } from "../../../../api/Api"

const { StringType, NumberType } = Schema.Types
const model = Schema.Model({
  name: StringType().isRequired("This field is required."),
  postalCode: NumberType("Please enter a valid number.").isRequired("PLZ is required.")
  // country: StringType().isRequired("Land field is required."),
  // street: StringType().isRequired("Straße & Hausnummer field is required."),
  // address: StringType().isRequired("Ort field is required."),
})

//components
export default class gride extends Component {
  state = {
    showAddressModal: false,
    addressData: [],
    activeAddress: "",
    activeShipment: "",
    shipmentData: [],
    stateData: [
      {
        label: "Österreich",
        value: "Österreich"
      },
      { label: "Others", value: "others" }
    ],
    initialValue: {
      name: "",
      postalCode: "",
      country: "Österreich",
      street: "",
      address: "",
      state: "Wien"
    }
  }

  componentDidMount() {}

  onChange = async (name, value) => {
    await this.setState({
      initialValue: { ...this.state.initialValue, [name]: value }
    })
  }

  handleClose = () => {
    this.setState({ showAddressModal: false })
  }
  open = (funcName, title, message) => {
    Notification[funcName]({
      title: title,
      description: <div>{message}</div>
    })
  }

  handleSubmitAddress = async () => {
    try {
      await address.create(this.state.initialValue)
      this.open("success", "Erfolgreich", "Ihre Adresse wurde hinzugefügt.")
      this.props.getAddress()
      this.handleClose()
    } catch (error) {
      console.log(error)
      this.open("error", "Warnung", error?.response?.data?.message)
    }
  }

  handleDeleteAddress = async (id) => {
    try {
      await address.deleteAddress(id)
      this.open("success", "Erfolgreich", "Ihre Adresse wurde gelöscht.")
      this.props.getAddress()
      this.handleClose()
    } catch (error) {
      console.log(error)
      this.open("error", "Warnung", "Ihre Adresse wurde nicht gelöscht.")
    }
  }

  render() {
    const { step, handleClickAddres, handleClickShipment, activeAddress, activeShipment, addressData, shipmentData } = this.props
    const {
      showAddressModal,
      initialValue,
      stateData
      // shipmentData,
      // activeAddress,
      // activeShipment,
    } = this.state
    return (
      <main>
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
                  <ControlLabel>Empfänger:</ControlLabel>
                  <FormControl
                    className=""
                    placeholder="Empfänger"
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

              <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
                <FormGroup className="marg-right20 head1-dad-down-right-inpt-anzahl flex">
                  <ControlLabel>Ort:</ControlLabel>
                  <FormControl
                    className=""
                    placeholder="Ort"
                    name="Ort"
                    type="text"
                    required
                    disabled
                    value={initialValue.state}
                    onChange={(e) => this.onChange("state", e)}
                    style={{ width: "100%" }}
                  />
                </FormGroup>
              </div>

              <div className="head1-dad-down-right-inpt-anzahl-form .rs-input">
                <FormGroup className="marg-right20 head1-dad-down-right-inpt-anzahl flex">
                  <ControlLabel>Land:</ControlLabel>
                  <FormControl
                    searchable={false}
                    onChange={(e) => this.onChange("country", e)}
                    name="country"
                    className=""
                    value={initialValue.country}
                    data={stateData}
                    required
                    disabled
                    placeholder="Österreich"
                  />
                </FormGroup>
              </div>
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
              <div onClick={() => handleClickAddres(x.id)} className="w-100 flex-center" key={i}>
                <div className="cart-address__info margin-top-50">
                  <div className={`cart-address__info-details flex-space-btw ${x.id === activeAddress ? "cart-address__info-details-active" : ""}`}>
                    <div>
                      <div className=" flex">
                        <div className="cart-address__info-title white-color">Name des Empfängers:</div>
                        <div className="cart-address__info-text white-color ">{x.name}</div>
                      </div>
                      <div className="cart-address__info-text white-color margin-left-0 ">{`${x.street}, ${x.postalCode}, ${x.state}, ${x.country}`}</div>
                    </div>
                    <div className="cart-address__info-select">
                      <div>
                        <Input checked={activeAddress === x.id} type="radio" />
                      </div>
                    </div>
                  </div>
                  <div className="cart-address__info-details flex-space-btw cart-address__info-details-bg-color">
                    <div className="cart-address__info-section flex ">
                      <div className="cart-address__info-title">Postleitzahl:</div>
                      <div className="cart-address__info-text">{x.postalCode}</div>
                    </div>
                    <div className="cart-address__edit-section flex-space-btw">
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
            <span> Lieferadresse hinzufügen</span>
          </Button>
        </div>
        <div className="data-upload__title"> Post-Typ </div>
        <div className="w-100 flex-center">
          <div className="cart-type__wrapper">
            {shipmentData?.length
              ? shipmentData.map((x) => {
                  return (
                    <div
                      key={x.id}
                      onClick={() => handleClickShipment(x)}
                      className={`cart-type__order-box  margin-right-20 ${x.id === activeShipment ? "cart-type__order-box-active" : ""}`}
                    >
                      <Radio checked={x.id === activeShipment}></Radio>

                      <div>{/* <Input type="radio" /> */}</div>
                      <div className=" w-100 margin-left-10">
                        <div className="cart-type__order-box-title">{x.du_name}</div>
                        <div className="cart-type__order-box-date">
                          {/* <div>Versand 2 bis 3 Werktage</div> */}
                          <div>
                            <span>{x.cost}</span> Euro
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              : ""}
          </div>
        </div>
      </main>
    )
  }
}
