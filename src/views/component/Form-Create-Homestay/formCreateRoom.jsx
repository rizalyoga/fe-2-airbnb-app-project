import { Form, Button, Col, Row, Spinner } from "react-bootstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import NavbarPage from "../navbarPage";
import allStore from "../../../store/actions/index.js";

const FormAddRoom = () => {
  const loading = useSelector(({ loading }) => loading);
  const dispatch = useDispatch();

  const { id } = useParams();

  const [nama_room, setNamaRoom] = useState("");
  const [total_penghuni, setPenghuni] = useState();
  const [harga, setHarga] = useState();
  const [deskripsi, setDeskripsi] = useState("");
  const [file, setFile] = useState();

  //upload image function
  const onImageUpload = (event) => {
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("nama_room", nama_room);
    data.append("total_penghuni", total_penghuni);
    data.append("harga", harga);
    data.append("deskripsi", deskripsi);
    data.append("file", file);

    dispatch(allStore.addRoom(data, id));
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
    <div>
      <NavbarPage />
      <h1 className="text-center my-5">FORM ADD ROOM</h1>
      <div className="container">
        <Row className="d-flex justify-content-center mb-5">
          <Col lg={5} md={6} sm={12} className="">
            <Form onSubmit={(event) => handleSubmit(event)}>
              <Row>
                <div className="Room">
                  <Form.Group className="mb-3" controlId="nama_room">
                    <Form.Label>Nama Room</Form.Label>
                    <Form.Control placeholder="Nama Room" autoComplete="off" value={nama_room} onChange={(event) => setNamaRoom(event.target.value)} />
                  </Form.Group>

                  <Row>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Total Penghuni</Form.Label>
                      <Form.Control value={total_penghuni} autoComplete="off" onChange={(event) => setPenghuni(event.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="harga">
                      <Form.Label>Harga</Form.Label>
                      <Form.Control value={harga} autoComplete="off" onChange={(event) => setHarga(event.target.value)} />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3 pt-3" controlId="deskripsi">
                    <Form.Label>Deskripsi</Form.Label>
                    <Form.Control placeholder="Deskripsi" autoComplete="off" value={deskripsi} onChange={(event) => setDeskripsi(event.target.value)} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="file-room" className="d-flex flex-column">
                    <Form.Label>Foto Room </Form.Label>
                    <input type="file" accept="image/jpeg" onChange={(event) => onImageUpload(event)} />
                  </Form.Group>
                </div>
              </Row>

              <Button variant="primary" type="submit" className="mt-4">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FormAddRoom;
