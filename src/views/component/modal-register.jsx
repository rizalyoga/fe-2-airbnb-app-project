import { Form, Button, Modal } from "react-bootstrap";

function MyVerticallyCenteredModalRegister(props) {
  return (
    <Modal {...props} size="xs" aria-labelledby="contained-modal-title-vcenter" centered>
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">Welcome to Airbnb</Modal.Title>
    </Modal.Header>
    <div className="form-container sign-in-container">
      <Modal.Body>
        <h5 className="mb-3 fw-bold" style={{ textAlign: "center" }}>
          Sign Up
        </h5>
        <Form>
        <input className="input-register" type="text" placeholder="Input your name"   />
          {/* <Form.Label className="mb-0 label-login">Email</Form.Label> */}
          <input className="input-register" type="email" placeholder="Input your email"   />
          {/* <Form.Label className="mb-0 label-login">Password</Form.Label> */}
          <input className="input-register" type="password" placeholder="password"/>
          <input className="input-register" type="text" placeholder="Input your phone number"   />
          <br />
          <span></span>
          <Button className="mt-3 submit-login " type="submit" onClick={props.onHide}>
            Sign Up
          </Button>
        </Form>
      </Modal.Body>
    </div>
  </Modal>
  );
}

export default MyVerticallyCenteredModalRegister;
