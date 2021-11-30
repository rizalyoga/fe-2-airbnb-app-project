import React, { useState } from "react";
import { Container, Form, Navbar, NavDropdown, Button, FormControl } from "react-bootstrap";
import MyVerticallyCenteredModal from "./modal-register";
import MyVerticallyCenteredModalLogin from "./modal-login";

const NavBar = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalLoginShow, setModalLoginShow] = React.useState(false);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src="https://i.ibb.co/BKBrd13/photo-2021-11-29-22-22-17.jpg" alt="logo-2021-11-29-22-22-17" width="90" height="60" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Navbar.Collapse>
              <Form className="d-flex">
                <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>

            <Navbar.Collapse className="justify-content-end">
              <NavDropdown
                title={
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                  </svg>
                }
                id="navbarScrollingDropdown"
              >
                <MyVerticallyCenteredModalLogin show={modalLoginShow} onHide={() => setModalLoginShow(false)} />
                <NavDropdown.Item onClick={() => setModalLoginShow(true)}>Sign in</NavDropdown.Item>

                <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
                <NavDropdown.Item onClick={() => setModalShow(true)}>Sign up</NavDropdown.Item>
              </NavDropdown>
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
