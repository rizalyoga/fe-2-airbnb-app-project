import "./form-user.css";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allStore from "../../../store/actions/index.js";
import NavBarPage from "../navbarPage";

const FormUser = () => {
  const [Nama, setNama] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone_Number, setPhone_Number] = useState("");

  const detailUser = useSelector((user) => user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Ini detail User UseEffect Form:", detailUser);
    setNama(detailUser.Nama);
    setEmail(detailUser.Email);
    setPhone_Number(detailUser.Phone_Number);
    console.log("Nama: ", Nama);
    console.log("Email: ", Email);
    console.log("Telepone: ", Phone_Number);
  }, [detailUser]);

  const handleEdit = (event) => {
    console.log("1. Masuk Submit Handling");
    event.preventDefault();
    console.log("Nama: ", Nama);
    console.log("Email: ", Email);
    console.log("Telepone: ", Phone_Number);
    dispatch(allStore.postEditUser({ Nama: Nama, Email: Email, Phone_Number: Phone_Number }));
  };

  return (
    <>
    <NavBarPage/>
    <div style={{ backgroundColor: "#252839", marginTop: "7%" }}>
      <div className="header text-center">
        <h1 id="title" className="pt-3 text-white mt-5">
          Edit Data User
        </h1>
        <p id="description" className="text-white">
          Thank you for taking the time to help us improve the platform
        </p>
      </div>

      <div className="container-md container-form justify-content-center rounded-2 p-4" style={{ backgroundColor: "#252839" }}>
        <form id="survey-form">
          <div className="form-group">
            <div className="mb-3">
              <label for="Nama" id="name-label">
                Nama
              </label>
              <input type="text" style={{ color: "#fff" }} className="form-control" id="Nama" value={Nama} onChange={(event) => setNama(event.target.value)} />
            </div>
          </div>

          <div className="form-group">
            <div className="mb-3">
              <label for="email" id="email">
                Email
              </label>
              <input type="email" style={{ color: "#fff" }} className="form-control" id="Email" value={Email} onChange={(event) => setEmail(event.target.value)} />
            </div>
          </div>

          <div className="form-group">
            <div className="mb-3">
              <label for="Phone_Number" id="Phone_Number">
                Nomer Hand Phone
              </label>
              <input type="text" style={{ color: "#fff" }} className="form-control" id="Phone_Number" value={Phone_Number} onChange={(event) => setPhone_Number(event.target.value)} />
            </div>
          </div>

          <div className="col-12">
            <Button
              className="btn btn-secondary"
              onClick={(event) => {
                handleEdit(event);
              }}
            >
              Edit
            </Button>
            <Button className="btn btn-secondary ms-2 bg-danger">Delete Akun</Button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default FormUser;
