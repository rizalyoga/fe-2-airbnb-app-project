import "./navbarHome.css";
import banner from "../../assets/banner.jpg";
import logo from "../../assets/Logo.png";
import { Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import MyVerticallyCenteredModalRegister from "./modal-register";
import MyVerticallyCenteredModalLogin from "./modal-login";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import NavBarPage from "./navbarPage";

const NavBarHome = () => {
  const [modalShowRegister, setModalShowRegister] = React.useState(false);
  const [modalLoginShow, setModalLoginShow] = React.useState(false);

  const navigate = useNavigate();
  // navigate('/user')

  const useraction = () => {
    navigate("/user");
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const navbaraction = () => {
    if (localStorage.token) {
      return (
        <NavDropdown
          title={
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" className="" fill="black" class="bi bi-person-circle" viewBox="0 0 15 26">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
          }
          id="navbarScrollingDropdown"
        >
          <MyVerticallyCenteredModalLogin show={modalLoginShow} onHide={() => setModalLoginShow(false)} />
          <NavDropdown.Item>
            <Button onClick={() => useraction()}>User</Button>
          </NavDropdown.Item>
          <MyVerticallyCenteredModalRegister show={modalShowRegister} onHide={() => setModalShowRegister(false)} />
          <NavDropdown.Item
            onClick={() => {
              logout();
            }}
          >
            Logout
          </NavDropdown.Item>
        </NavDropdown>
      );
    } else {
      return (
        <NavDropdown
          title={
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" className="" fill="black" class="bi bi-person-circle" viewBox="0 0 15 26">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
          }
          id="navbarScrollingDropdown"
        >
          <MyVerticallyCenteredModalLogin show={modalLoginShow} onHide={() => setModalLoginShow(false)} />
          <NavDropdown.Item onClick={() => setModalLoginShow(true)}>Sign in</NavDropdown.Item>
          <MyVerticallyCenteredModalRegister show={modalShowRegister} onHide={() => setModalShowRegister(false)} />
          <NavDropdown.Item onClick={() => setModalShowRegister(true)}>Sign up</NavDropdown.Item>
        </NavDropdown>
      );
    }
  };

  return (
    <>
      <NavBarPage />
      <div className="banner">
        <img src={banner} alt="pict" />
        <div className="caption" style={{ marginTop: "-35%", marginBottom: "15%" }}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ullam ratione iure. Voluptate harum vero consequuntur </p>
          <Button variant="danger coba">Discovery </Button>
        </div>
      </div>
    </>
  );
};
export default NavBarHome;
