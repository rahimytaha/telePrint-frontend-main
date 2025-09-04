import React, { Component, Fragment } from "react";
import Sidebar from "./components/sidbar";
import Content from "./components/content";
export default class gride extends Component {
  state = {
    show: false,
    page: "PROFILE",
  };

  componentDidMount() {}

  handleToggle = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleChangePage = (page) => {
    this.setState({ page });
  };

  render() {
    const { page } = this.state;
    return (
      <Fragment>
        <main>
          <div className="main2-dashB flex-j-c w-100">
            <div className="main2-dashB-dad w-90">
              <div className="main2-dashB-left">
                <Sidebar page={page} handleChangePage={this.handleChangePage} />
              </div>

              <Content page={page} {...this.props.props} />
            </div>
          </div>
        </main>
      </Fragment>
    );
  }
}
