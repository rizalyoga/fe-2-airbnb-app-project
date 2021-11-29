import { Container, Form,Row,Col, Nav, Navbar, NavDropdown,Button, FormControl, Modal } from "react-bootstrap"

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="xs"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" >
          Welcome to Airbnb          
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4 style={{textAlign:"center"}}>Sign Up</h4>
            <Form>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Input your name" />
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Input your email" />
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"  />
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="+620000" />

            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Sign up</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default MyVerticallyCenteredModal