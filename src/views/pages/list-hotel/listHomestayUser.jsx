import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import allStore from "../../../store/actions/index.js";
import { Table, Button, ButtonGroup } from "react-bootstrap";
import NavBarPage from "../../component/navbarPage.jsx";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";

const HomestayUser = () => {
  const listHomestay = useSelector(({ listHomestay }) => listHomestay);
  const detailUser = useSelector((user) => user.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const idKu = parseInt(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(allStore.fetchHomestay());
  }, [dispatch]);

  useEffect(() => {
    console.log("INI ADA DI HOMESTAY-USER", listHomestay);
    console.log("DETAIL-USER", detailUser);
    setUserId(detailUser.ID);
  }, [listHomestay, detailUser]);

  // NAVIGATION
  const toAddRoom = (id) => {
    navigate(`/addRoom${id}`);
  };

  const toDetail = (id) => {
    navigate(`/homestay/${id}`);
  };

  const toEditHomestay = (id) => {
    navigate(`/editHomestay/${id}`);
  };

  // HANDLEDETELE
  const handleDelete = (id) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    swal({
      title: "Kamu Yakin Hapus Homestay ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(`http://18.141.192.116/jwt/homestays/${id}`, config)
          .then((response) => {
            console.log("3.berhasil dapat data", response.data);
            console.log("INI TOKEN DELETE", token);
            console.log("Homestay dengan id:", id);
            swal("Data Sukses dihapus", {
              icon: "success",
            });
          })
          .catch((error) => {
            console.log("3.berhasil dapat error", error.message);
            console.log("3.berhasil dapat error--", error);
            swal("Data gagal dihapus", error.message);
          });
      } else {
        swal("Data tidak jadi dihapus");
      }
    });
  };

  return (
    <div>
      <NavBarPage />
      <div className="container">
        <h1 className="text-center my-5">DAFTAR HOMESSTAY</h1>
        <div style={{ height: "80vh" }}>
          <Table>
            <thead>
              <div>
                <Button className="my-3" variant="outline-danger" onClick={() => navigate("/addHomestay")}>
                  Tambahkan Homestay
                </Button>
              </div>
              <tr>
                <th className="text-center bg-danger text-white">HOMESSTAY</th>
                <th className="text-center bg-danger text-white">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {listHomestay.map((el, i) => {
                if (el.UsersID !== idKu) {
                  return <></>;
                } else if (el.UsersID === idKu) {
                  return (
                    <tr key={i}>
                      <td className="text-center " style={{ fontSize: "130%" }}>
                        {el.Nama}
                      </td>
                      <td className="text-center">
                        <ButtonGroup aria-label="Basic example">
                          <Button
                            variant="outline-danger"
                            onClick={() => {
                              toDetail(el.ID);
                            }}
                          >
                            DETAIL
                          </Button>
                          <Button
                            variant="outline-danger"
                            onClick={() => {
                              toAddRoom(el.ID);
                            }}
                          >
                            TAMBAH ROOM
                          </Button>
                          <Button
                            variant="outline-danger"
                            onClick={() => {
                              toEditHomestay(el.ID);
                            }}
                          >
                            EDIT
                          </Button>
                          <Button
                            variant="outline-danger"
                            onClick={() => {
                              handleDelete(el.ID);
                            }}
                          >
                            DELETE
                          </Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default HomestayUser;
