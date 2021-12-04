import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import allStore from "../../../store/actions/index.js";
import { Table, Button, ButtonGroup } from "react-bootstrap";
import NavBarPage from "../../component/navbarPage.jsx";

const HomestayUser = () => {
  const listHomestay = useSelector(({ listHomestay }) => listHomestay);
  const detailUser = useSelector((user) => user.user);
  const dispatch = useDispatch();

  const [userId, setUserId] = useState("");

  useEffect(() => {
    dispatch(allStore.fetchHomestay());
  }, [dispatch]);

  useEffect(() => {
    console.log("INI ADA DI HOMESTAY-USER", listHomestay);
    console.log("DETAIL-USER", detailUser);
    setUserId(detailUser.ID);
  }, [listHomestay, detailUser]);

  return (
    <div>
      <NavBarPage />
      <div className="container">
        <h1 className="text-center my-5">DAFTAR HOMESSTAY</h1>
        <div style={{ height: "80vh" }}>
          <Table>
            <thead>
              <div>
                <Button className="my-3" variant="outline-danger">
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
                if (el.UsersID !== userId) {
                  return <></>;
                } else if (el.UsersID === userId) {
                  return (
                    <tr key={i}>
                      <td className="text-center " style={{ fontSize: "130%" }}>
                        {el.Nama}
                      </td>
                      <td className="text-center">
                        <ButtonGroup aria-label="Basic example">
                          <Button variant="outline-danger">DETAIL</Button>
                          <Button variant="outline-danger">EDIT</Button>
                          <Button variant="outline-danger">DELETE</Button>
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
