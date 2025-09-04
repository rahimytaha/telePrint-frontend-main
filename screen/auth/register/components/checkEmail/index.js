import React, { Component, Fragment } from "react"
import { account } from "../../../../../api/Api"
import Link from "next/link"

import { Form, FormGroup, Notification, FormControl, Schema } from "rsuite"

const { StringType } = Schema.Types
const model = Schema.Model({
  email: StringType().isEmail("Bitte geben Sie eine gültige E-Mail-Adresse ein.").isRequired("E-Mail ist erforderlich."),
  verifyCode: StringType().isRequired("")
})
export default class StepOne extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expireInSeconds: 180,
      step: 1,
      initialValue: {
        email: "",
        verifyCode: ""
      },
      formError: {},
      redirect: false
    }
  }

  open = (funcName, title, message) => {
    Notification[funcName]({
      title: title,
      description: <div style={{ color: "black" }}>{message}</div>
    })
  }

  componentDidMount() {
    // const token = localStorage.getItem("token");
    // if (token) {
    //   this.setState({ redirect: true });
    // }
  }

  // componentWillUnmount() {
  //   // Clear the interval right before component unmount
  //   clearInterval(this.interval);
  // }

  time = () => {
    const currentTime = Number(this.state.expireInSeconds - 1)
    this.setState({
      expireInSeconds: currentTime
    })
    if (currentTime > 0) {
      setTimeout(() => {
        this.time()
      }, 1_000)
    }
  }

  nextStep = (step) => {
    if (step === 2) {
      this.time()

      // set Interval
      // this.interval = setInterval(this.time, 1_000);
    }
    if (step === 1) {
      localStorage.removeItem("email")
    }
    this.setState({ step: step })
  }
  handleSubmitVerifyEmail = async () => {
    try {
      const { data, status } = await account.verify(this.state.initialValue)
      if (status === 200) {
        this.open("success", "Erfolgreich", "Sie können sich jetzt registrieren")

        this.props.goNext("step2")
      }
    } catch (e) {
      console.error(e)
      this.open("error", "Warnung", "Es gab ein Problem bei der Bestätigung der E-Mail.")
    }
  }
  handleSubmitCheckEmail = async () => {
    try {
      const { data, status } = await account.checkEmailLogin(this.state.initialValue)
      localStorage.setItem("email", this.state.initialValue.email)
      if (status === 240) {
        this.setState({ expireInSeconds: 180 })
        this.open("error", "Warnung", "Diese E-Mail-Adresse wurde bereits registriert.")
        return
      }
      if (status === 226) {
        this.setState({ expireInSeconds: 180 })
        this.open("success", "Erfolgreich", "Wir haben Ihnen einen Bestätigungscode gesendet.")
        this.nextStep(2)
        return
      }
      if (status === 200) {
        this.setState({ expireInSeconds: 180 })

        this.open("success", "Erfolgreich", "Der Bestätigungscode wurde gesendet.")
        this.nextStep(2)
        return
      }
    } catch (e) {
      console.error(e)
      this.open("error", "Warnung", "Es gibt ein Problem beim Senden des Codes")
    }
  }

  onChange = (name, value) => {
    this.setState({
      initialValue: {
        ...this.state.initialValue,
        [name]: value
      }
    })
  }
  render() {
    const { loadingButtom, step } = this.state
    return (
      <Fragment>
        <main>
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
                  <div className="login-account-icon flex-j-c w-100">
                    <i className="mdi mdi-account" />
                  </div>
                  {step === 2 ? (
                    <div className="hcode flex-j-s">
                      <div className="cdleft p-r">
                        <i className="mdi mdi-timer-outline" />
                        <p>
                          <p className="font14 regular margleft-4 p blue">{this.state.expireInSeconds}</p>
                        </p>
                      </div>
                      {this.state.expireInSeconds === 0 ? (
                        <div className="cdright">
                          resend code
                          <i className="mdi mdi-reload" />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  ) : (
                    <div className="right-items--text">Bitte geben Sie zur Bestätigung Ihre E-Mail-Adresse ein</div>
                  )}

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
                              disabled={step === 2}
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
                    {step === 2 ? (
                      <div className="flex-j-c w-100">
                        <div className="login-input flex">
                          <div className="input-icons">
                            <i className="mdi mdi-lock" />
                          </div>
                          <div className="input-text">
                            <FormGroup className="">
                              <FormControl
                                className=""
                                placeholder="Verify Code"
                                name="verifyCode"
                                type="text"
                                required
                                onChange={(e) => this.onChange("verifyCode", e)}
                              />
                            </FormGroup>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="login-button-text">
                      {!loadingButtom ? (
                        <div className="flex-j-c gap-8">
                          {step === 2 ? (
                            <>
                              <div className="login-btn">
                                <button onClick={this.handleSubmitVerifyEmail}>E-Mail bestätigen</button>
                              </div>
                              <div className="login-btn">
                                <button onClick={() => this.nextStep(1)}>Ändern Sie die E-Mail</button>
                              </div>
                            </>
                          ) : (
                            <div className="login-btn">
                              <button onClick={this.handleSubmitCheckEmail}>E-Mail überprüfen</button>
                            </div>
                          )}
                        </div>
                      ) : (
                        "loading"
                      )}
                    </div>
                  </Form>

                  <div className="register-text">
                    Hast du einen Account?
                    <span>
                      <Link href="/login">Anmelden</Link>
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
