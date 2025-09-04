import React, { Component } from "react";
import { Fragment } from "react";
import Router from 'next/router';

// api

// Components
import CheckEmail from "../components/checkEmail";
import Register from "../components/register";
import { Notification } from "rsuite";
export default class index extends Component {
  state = {
    uiPosition: [],

    Active: "step1",
    loginData: { phoneNumber: "", verifyCode: "" },
    expireInSeconds: 180,
  };

  componentDidMount() {}

  goNext = (step) => {
    this.setState({ Active: step });
  };

  loginData = (loginData) => {
    this.setState({ loginData });
  };

  RedirectToSite = () => {
    Router.push('/')
    this.setState({ redirect: true });
  };

  open = (funcName, title, message) => {
    Notification[funcName]({
      title: title,
      description: <div style={{ color: "black" }}>{message}</div>,
    });
  };

  render() {
    let { Active } = this.state;
  
    return (
      <Fragment>
        {Active === "step1" ? (
          <CheckEmail
            goNext={this.goNext}
            loginData={this.loginData}
            open={this.open}
          />
        ) : Active === "step2" ? (
          <Register
            goNext={this.goNext}
            data={this.state}
            redirect={this.RedirectToSite}
            expireInSeconds={this.state.expireInSeconds}
            open={this.open}
          />
        ) : (
          ""
        )}
      </Fragment>
    );
  }
}
