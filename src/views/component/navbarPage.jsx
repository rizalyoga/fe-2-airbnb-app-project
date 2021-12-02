import React, { useState } from "react";
import {Form, NavDropdown, Button, FormControl } from "react-bootstrap";
import MyVerticallyCenteredModalRegister from "./modal-register";
import logo from '../../assets/Logo.png'
import MyVerticallyCenteredModalLogin from "./modal-login";
import "./navbarPage.css"


const NavBarPage = () => {
  const [modalShowRegister, setModalShowRegister] = React.useState(false);
  const [modalLoginShow, setModalLoginShow] = React.useState(false);

  const logout =() =>{
    localStorage.removeItem("token")
    window.location.reload();
}
  const navbaractionpage =() =>{
  if(localStorage.token){
    return(
      <>
      <NavDropdown title={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" className="" fill="black" class="bi bi-person-circle" viewBox="0 0 15 26"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></svg>} id="navbarScrollingDropdown">
        <MyVerticallyCenteredModalLogin show={modalLoginShow} onHide={() => setModalLoginShow(false)} />
        <NavDropdown.Item >User</NavDropdown.Item>
    <MyVerticallyCenteredModalRegister show={modalShowRegister} onHide={() => setModalShowRegister(false)} />
        <NavDropdown.Item onClick={() => {logout()}}>Logout</NavDropdown.Item>
        </NavDropdown>
      </>
    )
  }else{
    return (
        <>
        <NavDropdown title={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" className="" fill="black" class="bi bi-person-circle" viewBox="0 0 15 26"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></svg>} id="navbarScrollingDropdown">
    <MyVerticallyCenteredModalLogin show={modalLoginShow} onHide={() => setModalLoginShow(false)} />
        <NavDropdown.Item onClick={() => setModalLoginShow(true)}>Sign in</NavDropdown.Item>
    <MyVerticallyCenteredModalRegister show={modalShowRegister} onHide={() => setModalShowRegister(false)} />
        <NavDropdown.Item onClick={() => setModalShowRegister(true)}>Sign up</NavDropdown.Item>
    </NavDropdown>
      </>
      );
  }
}
    return(
      <>
      <div className="navbarrr d-flex justify-content-between">
      <div className="nav"><img src={logo} width="165" height="50" alt="logo"/></div>
      <div className="nav">
          <Form className="d-flex">
        <FormControl    
        type="search"
        placeholder="Search"
        className="form-seach-nav me-2" 
        aria-label="Search"
      />
      <Button variant="danger" className="mt--3">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
      </Button>
    </Form>
    </div>
      <div className="nav">
      <div className="user rounded-pill">
      {navbaractionpage()}
      </div>
    
      </div>
    </div>
    </>
    );
};

export default NavBarPage;
