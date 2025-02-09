import "./form-user.css";
import { Button, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import allStore from "../../../store/actions/index.js";
import NavBarPage from "../navbarPage";

const FormUser = () => {
  const [Nama, setNama] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone_Number, setPhone_Number] = useState("");

  const detailUser = useSelector((user) => user.user);
  const loading = useSelector(({ loading }) => loading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Ini detail User UseEffect Form:", detailUser);
    setNama(detailUser.Nama);
    setEmail(detailUser.Email);
    setPhone_Number(detailUser.Phone_Number);
    console.log("Nama: ", Nama);
    console.log("Email: ", Email);
    console.log("Telepone: ", Phone_Number);
  }, [detailUser]);

  /* -------------------------------- EDIT USER ------------------------------- */

  const handleEdit = (event) => {
    console.log("1. Masuk Submit Handling");
    event.preventDefault();
    console.log("Nama: ", Nama);
    console.log("Email: ", Email);
    console.log("Telepone: ", Phone_Number);
    dispatch(allStore.postEditUser({ Nama: Nama, Email: Email, phone: Phone_Number }));
  };

  /* ------------------------------ DELETTE USER ------------------------------ */

  const handleDelete = (event) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    swal({
      title: "Kamu Yakin Mau Hapus Akun?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete("http://54.179.25.66/jwt/users", config)
          .then((response) => {
            localStorage.removeItem("token");
            if (response.data.data !== null) {
              navigate("/");
            }
            window.location.reload();
          })
          .catch((err) => {
            console.log("3, Masuk ERROR:", err);
            swal(err.response.data.message);
            // allStore.setError(err.response.data.message);
            // dispatch(allStore.setError(err.response.data.message));
          });
        swal("Data Sukses dihapus", {
          icon: "success",
        });
      } else {
        swal("Data tidak jadi dihapus");
      }
    });
  };

  if (loading) {
    return (
      <div className="bg-danger d-flex justify-content-center align-items-center flex-column" style={{ height: "100vh", opacity: "0.1" }}>
        <Spinner animation="border" />
        <h1 className="text-center text-white" style={{ margin: "auto" }}>
          PLEASE WAIT ...
        </h1>
        <Spinner animation="grow" />
      </div>
    );
  }

  return (
    <>
      <NavBarPage />
      <div style={{ backgroundColor: "#D85B67", height: "70vh", marginTop: "-9" }}>
        <div className="header text-center">
          <h1 id="title" className="pt-3 text-white ">
            Edit Data User
          </h1>
        </div>

        <div className="container-md container-form justify-content-center rounded-2 p-4" style={{ backgroundColor: "#D85B67" }}>
          <form id="survey-form">
            <div className="form-group">
              <div className="mb-3">
                <label for="Nama" id="name-label">
                  Nama
                </label>
                <input type="text" style={{ color: "#fff" }} className="form-control " autoComplete="off" id="Nama" value={Nama} onChange={(event) => setNama(event.target.value)} />
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
              <Button
                className="btn btn-danger ms-2 bg-danger"
                onClick={(event) => {
                  handleDelete(event);
                }}
              >
                Delete Akun
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormUser;
