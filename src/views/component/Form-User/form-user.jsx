import "./form-user.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import allStore from "../../../store/actions/index.js";

const FormUser = () => {
  const [Nama, setNama] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone_Number, setPhone_Number] = useState("");

  const detailUser = useSelector(({ user }) => user);

  useEffect(() => {
    console.log(("Ini detail User:", detailUser));
  }, [detailUser]);

  return (
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
              <input type="text" className="form-control" id="Nama" />
            </div>
          </div>

          <div className="form-group">
            <div className="mb-3">
              <label for="email" id="email">
                Email
              </label>
              <input type="email" className="form-control" id="Email" />
            </div>
          </div>

          <div className="form-group">
            <div className="mb-3">
              <label for="Phone_Number" id="Phone_Number">
                Nomer Hand Phone
              </label>
              <input type="cellphone" className="form-control" id="Phone_Number" />
            </div>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-secondary">
              Edit
            </button>
            <button type="submit" className="btn btn-secondary ms-2 bg-danger">
              Delete Akun
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormUser;
