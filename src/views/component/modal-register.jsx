import axios from "axios";
import { useState } from "react";
import { Form, Button, Modal, Spinner} from "react-bootstrap";
import swal from "sweetalert";



function MyVerticallyCenteredModalRegister(props) {
    const[nama, setNama] =useState(" ")
    const[email, setEmail] =useState(" ")
    const[password, setPassword] =useState(" ")
    const[phone, setPhone] =useState(" ")
    const[loading, setLoading] =useState(false)
    const[errMsg, setErrMsg]= useState(null)


    const handleRegister = () =>{
      const body ={
        nama, email, password, phone
      }
      console.log(nama,email,password,phone)

      setLoading(true)

      axios.post('http://18.141.192.116/users', body)
      .then((data)=>{
        console.log(data, "success register")
        swal("succes register")
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch(err =>{
        console.log(err.response.data.message,  "error register")
        swal(err.response.data.message)
      })
      .finally(() => setLoading(false) )
    }

    // const returnErrMsg = () =>{
    //   if(errMsg){
    //     return <Alert variant="danger">{errMsg}</Alert>
    //   }
    //   return <></>
      
    // }

    const Modall =() =>{
      if(loading){
        return(
          <Modal {...props} size="xs" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Welcome to Airbnb</Modal.Title>
        </Modal.Header>
        <div className="form-container sign-in-container">
         
          <Modal.Body>
            <h5 className="mb-3 fw-bold" style={{ textAlign: "center" }}>
              Sign Up
            </h5>
           <>
           <Spinner animation="border"/>
           </>
           
           </Modal.Body>

        </div>
      </Modal>
        )
      }
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
            <input className="input-register" type="text" placeholder="Input your name"  onChange={(e) => setNama(e.target.value)} />
              {/* <Form.Label className="mb-0 label-login">Email</Form.Label> */}
              <input className="input-register" type="email" placeholder="Input your email"   onChange={(e) => setEmail(e.target.value)} />
              {/* <Form.Label className="mb-0 label-login">Password</Form.Label> */}
              <input className="input-register" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
              <input className="input-register" type="text" placeholder="Input your phone number"  onChange={(e) => setPhone(e.target.value)} />
              <br />
              <span></span>
              <Button className="mt-3 submit-login " onClick={() => handleRegister()} >
                Sign Up
              </Button>
            </Form>
          </Modal.Body>

        </div>
      </Modal>
      )
    }

      return (
        <>      
         {Modall()}
        </>
      )
}

export default MyVerticallyCenteredModalRegister;
