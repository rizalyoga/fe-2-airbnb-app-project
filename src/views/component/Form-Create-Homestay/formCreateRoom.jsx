import { Form, Button, Col, Row } from "react-bootstrap";
import NavbarPage from "../navbarPage";

const FormAddRoom = () => {
  return (
    <div>
      <NavbarPage />
      <h1 className="text-center my-5">FORM ADD ROOM</h1>
      <div className="container">
        <Row className="d-flex justify-content-center mb-5">
          <Col lg={5} md={6} sm={12} className="">
            <Form>
              <Row>
                <div className="Room-1">
                  <Form.Group className="mb-3" controlId="nama_room">
                    <Form.Label>Nama Room 1</Form.Label>
                    <Form.Control placeholder="Nama Room" />
                  </Form.Group>

                  <Row>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Total Penghuni</Form.Label>
                      <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="harga">
                      <Form.Label>Harga</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3 pt-3" controlId="deskripsi">
                    <Form.Label>Deskripsi</Form.Label>
                    <Form.Control placeholder="Deskripsi" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="file-room" className="d-flex flex-column">
                    <Form.Label>Foto Room </Form.Label>
                    <input type="file" accept="image/jpeg" />
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
