import { useState } from "react";
import { Form, Button, Modal, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../store/actions/index.js";
import "./modal-login.css";

// import { postLogin } from "../../store/actions/Login/Set-Login.js";

function MyVerticallyCenteredModalLogin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  // const errorMsg = useSelector((setError) => setError);
  const loading = useSelector(({ loading }) => loading);

  // const returnErrMessage = () => {
  //   if (errorMsg) {
  //     console.log("MASUK SINI UDAH ERROR NYA", errorMsg);
  //     return <div>{errorMsg}</div>;
  //   }

  //   return <></>;
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("1.masuk Handle Submit");
    dispatch(allStore.postLogin({ email, password }));
    if (loading) {
      console.log("lagi loading nih");
      return (
        <div className="bg-danger d-flex justify-content-center align-items-center flex-column" style={{ height: "100vh", opacity: "0.1" }}>
          <Spinner animation="border" />
          <Spinner animation="grow" />
        </div>
      );
    }
  };

  return (
    <Modal {...props} size="xs" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Welcome to Airbnb</Modal.Title>
      </Modal.Header>
      <div className="form-container sign-in-container">
        <Modal.Body>
          <h5 className="mb-3 fw-bold" style={{ textAlign: "center" }}>
            Sign In
          </h5>
          <Form onSubmit={(event) => handleSubmit(event)}>
            {/* <Form.Label className="mb-0 label-login">Email</Form.Label> */}
            <input className="input-login" type="email" placeholder="Input your email" value={email} onChange={(event) => setEmail(event.target.value)} />
            {/* <Form.Label className="mb-0 label-login">Password</Form.Label> */}
            <input className="input-login" type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            <br />
            {/* {returnErrMessage()} */}
            <span></span>
            <Button className="mt-3 submit-login " type="submit">
              Sign In
            </Button>
          </Form>
        </Modal.Body>
      </div>
    </Modal>
  );
}

export default MyVerticallyCenteredModalLogin;
