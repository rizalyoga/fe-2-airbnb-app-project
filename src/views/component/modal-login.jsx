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
  const error = useSelector((setError) => setError);
  const loading = useSelector((setLoading) => setLoading);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("1.masuk Handle Submit");
    dispatch(allStore.postLogin({ email, password }));
    if (loading) {
      console.log("MASUK LOADING");
      return (
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      );
    }
  };

  //   if (error) {
  //     return <div>{error}</div>;
  //   }

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
            <span></span>
            <Button className="mt-3 submit-login " type="submit" onClick={props.onHide}>
              Sign In
            </Button>
          </Form>
        </Modal.Body>
      </div>
    </Modal>
  );
}

export default MyVerticallyCenteredModalLogin;
