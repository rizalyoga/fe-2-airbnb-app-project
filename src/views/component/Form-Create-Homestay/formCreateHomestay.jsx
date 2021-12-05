import { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import allStore from "../../../store/actions/index.js";
import NavbarPage from "../navbarPage";

const FormAddHomestay = () => {
  const loading = useSelector(({ loading }) => loading);

  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [kota_id, setKota] = useState();
  const [file, setFile] = useState();

  const onImageUpload = (event) => {
    // const reader = new FileReader();
    // const file = event.target.files[0];
    // reader.onloadend = () => {
    //   setFile(reader.result);
    // };
    // reader.readAsDataURL(file);
    console.log(event.target.files[0]);
    setFile(event.target.files[0]);
  };

  //handle listkota
  const handleChange = (event) => {
    let value = parseInt(event.target.value);
    // console.log("IKI VALUE", typeof value);
    setKota(value);
    console.log(kota_id);
  };

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    data.append("nama", nama);
    data.append("kota_id", kota_id);
    data.append("alamat", alamat);
    data.append("file", file);

    dispatch(allStore.addHomestay(data));
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
      <h1 className="text-center my-5">FORM ADD HOMESTAY</h1>
      <div className="container">
        <Row className="d-flex justify-content-center mb-5">
          <Col lg={5} md={6} sm={12} className="">
            <Form onSubmit={(event) => handleSubmit(event)}>
              <Form.Group className="mb-3" controlId="nama">
                <Form.Label>Nama Homestay</Form.Label>
                <Form.Control placeholder="Nama Homestay" value={nama} onChange={(event) => setNama(event.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="kota_id">
                <Form.Label>Kota</Form.Label>
                <Form.Select defaultValue="Choose..." value={kota_id} onChange={handleChange}>
                  <option>Choose...</option>
                  <option className="text-dark" value="3171">
                    KOTA JAKARTA SELATAN
                  </option>
                  <option className="text-dark" value="3172">
                    KOTA JAKARTA TIMUR
                  </option>
                  <option className="text-dark" value="3173">
                    KOTA JAKARTA PUSAT
                  </option>
                  <option className="text-dark" value="3174">
                    KOTA JAKARTA BARAT
                  </option>
                  <option className="text-dark" value="3175">
                    KOTA JAKARTA UTARA
                  </option>
                  <option className="text-dark" value="3276">
                    KOTA DEPOK
                  </option>
                  <option className="text-dark" value="3204">
                    KABUPATEN BANDUNG
                  </option>
                  <option className="text-dark" value="3578">
                    KOTA SURABAYA
                  </option>
                  <option className="text-dark" value="3573">
                    KOTA MALANG
                  </option>
                  <option className="text-dark" value="3575">
                    KOTA PASURUAN
                  </option>
                  <option className="text-dark" value="3579">
                    KOTA BATU
                  </option>
                  <option className="text-dark" value="1276">
                    KOTA BINJAI
                  </option>
                  <option className="text-dark" value="1371">
                    KOTA PADANG
                  </option>
                  <option className="text-dark" value="1571">
                    KOTA JAMBI
                  </option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="alamat">
                <Form.Label>Alamat</Form.Label>
                <Form.Control placeholder="Alamat" value={alamat} onChange={(event) => setAlamat(event.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="file-homestay" className="d-flex flex-column">
                <Form.Label>Foto Homestay </Form.Label>
                <input type="file" accept="image/jpeg" onChange={(event) => onImageUpload(event)} />
              </Form.Group>

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

export default FormAddHomestay;
