/** @format */

import React from "react";

import { Modal, Button } from "rsuite";

export default class BasicDemo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="modal-container">
        <Modal size="xs" full show={this.props.show} onHide={this.props.close}>
          <Modal.Header>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.content}</Modal.Body>
          <Modal.Footer>
            <Button color="green" onClick={this.props.handleOK} appearance="primary">
              تائید
            </Button>
            <Button color="red" onClick={this.props.close} appearance="subtle">
              انصراف
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
