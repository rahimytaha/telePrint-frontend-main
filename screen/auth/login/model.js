import React from "react"

import Content from "./content/model"
import { Modal } from "rsuite"
// import Header from "../../components/Layouts/MainHeader";
function LoginModal(props) {
  return (
    <Modal size={"md"} show={props.show} onHide={props.handleClose}>
      <Modal.Body>
        <Content {...props} />
      </Modal.Body>
    </Modal>
  )
}

export default LoginModal
