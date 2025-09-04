import React, { Component, Fragment } from "react";
import Profile from "../profile";
import Order from "../order";
import Address from "../address";
export default class gride extends Component {
  state = {
    show: false,
  };

  componentDidMount() {
    console.log(this.props);
  }

  handleToggle = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    const { page } = this.props;
    return (
      <Fragment>
        {page === "PROFILE" ? <Profile /> : ""}
        {page === "ORDER" ? <Order /> : ""}
        {page === "ADDRESS" ? <Address /> : ""}
      </Fragment>
    );
  }
}
