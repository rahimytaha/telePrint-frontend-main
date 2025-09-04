/** @format */

import { Component } from "react"
import { Form, FormGroup, Notification, FormControl, Schema, Loader } from "rsuite"
import Router from "next/router"
import { emit } from "jetemit"

import { account } from "../../../../api/Api"
import Link from "next/link"

import Cookies from "universal-cookie"

const { StringType } = Schema.Types
const model = Schema.Model({
  email: StringType().isEmail("Bitte geben Sie eine gültige E-Mail-Adresse ein.").isRequired("E-Mail ist erforderlich."),
  password: StringType().isRequired("Passwort wird benötigt.")
})
export default class gride extends Component {
  state = {
    loading: false,
    initialValue: {
      email: "",
      password: ""
    },
    formError: {},
    redirect: false,
    loadingButtom: false,
    showPassword: false
  }

  componentDidMount() {}

  onChange = (name, value) => {
    this.setState({
      initialValue: {
        ...this.state.initialValue,
        [name]: value
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
      if (await !this.form.check()) {
        if (this.state.formError.email) {
          this.open("error", "Warnung", this.state.formError.email)
        }
        if (this.state.formError.password) {
          this.open("error", "Warnung", this.state.formError.password)
        }

        console.error("Form Error")
        return
      }

      this.setState({ loadingButtom: true })
      this.setState({ loading: true })

      const { data, status } = await account.login(this.state.initialValue)
      if (status === 200) {
        const cookies = new Cookies()
        cookies.set("token", data.data.token)
        cookies.set("personalData", JSON.stringify(data.data))

        localStorage.setItem("token", data.data.token)
        localStorage.setItem("personalData", JSON.stringify(data.data))
        this.open("success", "Einloggen", "Sie sind angemeldet.")
        this.props.handleClose()
        emit("order")
        this.setState({ redirect: true })
      }
    } catch (error) {
      console.error(error.response)
      this.open("error", "Warnung", error.response && error.response.data && error.response.data.message)
    }

    this.setState({ loadingButtom: false, loading: false })
  }

  render() {
    const { loadingButtom, loading, showPassword } = this.state
    return (
      <>
        {loading ? <Loader backdrop center content="Verladung" /> : ""}
        <div className=" w-100 flex-j-c">
          <div className="right-items--container w-100">
            <div className="login-account-icon flex-j-c w-100">
              <i className="mdi mdi-account" />
            </div>
            <div className="right-items--text">Melden Sie sich an, um weiterzumachen</div>
            <Form
              onCheck={(formError) => {
                this.setState({ formError })
              }}
              ref={(ref) => (this.form = ref)}
              formValue={this.state.initialValue}
              model={model}
              layout="horizontal"
              fluid
            >
              <div className="flex-j-c w-100">
                <div className="login-input flex">
                  <div className="input-icons">
                    <i className="mdi mdi-email-outline" />
                  </div>
                  <div className="input-text">
                    <FormGroup className="input-text-form-wrapper">
                      <FormControl
                        className=""
                        placeholder="E-Mail-Adresse"
                        name="email"
                        type="email"
                        required
                        onChange={(e) => this.onChange("email", e)}
                      />
                    </FormGroup>
                  </div>
                </div>
              </div>
              <div className="flex-j-c w-100">
                <div className="login-input flex">
                  <div className="input-icons">
                    <i className="mdi mdi-lock" />
                  </div>
                  <div className="input-text">
                    <FormGroup className="input-text-form-wrapper">
                      <FormControl
                        className=""
                        placeholder="Passwort"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        onChange={(e) => this.onChange("password", e)}
                      />
                    </FormGroup>
                  </div>
                  <div className="show-data" onClick={() => this.setState({ showPassword: !showPassword })}>
                    <i className={`mdi mdi-eye${showPassword ? "-off" : ""}`} />
                  </div>
                </div>
              </div>
              <div className="login-button-text">
                {!loadingButtom ? (
                  <div className="flex-j-c gap-8">
                    <div className="login-btn">
                      <button onClick={this.handleSubmit}>Anmelden</button>
                    </div>
                  </div>
                ) : (
                  "loading"
                )}
              </div>
            </Form>
            <div className="register-text">
              Sind Sie neuer Benutzer?
              <span>
                <Link href="/register">Registrieren</Link>
              </span>
            </div>
          </div>
        </div>
      </>
    )
  }
}
