import "./detail-hotel.css"
import img from '../../../assets/banner.jpg'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { Col, Row } from "react-bootstrap"
import NavBarPage from "../../component/navbarPage"

const Map =() => {
    const position = [-7.845756451374453, 110.34483583781163]

    return (
 <MapContainer center={position} zoom={18} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        Hotel Name
      </Popup>
    </Marker>
  </MapContainer>
    )
}

const DetailHotel = () =>{
    return (
        <> 
        <NavBarPage/>
        <div className="container-hotel">
            <div className="content">
                <div className="hotel-name">
                    <h3>Hotel Name</h3>
                    <p>Jln.Bantul, Bantul, Yogyakarta</p>
                    <div className="hotel-pict">
                    <img src={img} alt="gambar" width="100%" />
                    </div>
                <div className="select-room mt-5"><h3> List Room </h3></div>
                <div className="continer-room mt-3">
                    <div className="list-room">
                        <div className="room-name">
                            <Row className="mb-4">
                                <Col md="auto">
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-52686735/original/e4f352ef-b970-441d-ab7d-b0655cb28e01.jpeg" alt="img-hotel" width="250px" style={{borderRadius:"6%"}}/>
                                </Col>
                                <Col>
                                <h4>Nama_Room</h4>
                                <p className="desc mt-2">Deskripsi</p>
                                <p className="desc ">Total_Penghuni</p>
                                <p className="desc ">Harga</p>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col md="auto">
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-52686735/original/e4f352ef-b970-441d-ab7d-b0655cb28e01.jpeg" alt="img-hotel" width="250px" style={{borderRadius:"6%"}}/>
                                </Col>
                                <Col>
                                <h4>Nama_Room</h4>
                                <p className="desc mt-2">Deskripsi</p>
                                <p className="desc ">Total_Penghuni</p>
                                <p className="desc ">Harga</p>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col md="auto">
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-52686735/original/e4f352ef-b970-441d-ab7d-b0655cb28e01.jpeg" alt="img-hotel" width="250px" style={{borderRadius:"6%"}}/>
                                </Col>
                                <Col>
                                <h4>Nama_Room</h4>
                                <p className="desc mt-2">Deskripsi</p>
                                <p className="desc ">Total_Penghuni</p>
                                <p className="desc ">Harga</p>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col md="auto">
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-52686735/original/e4f352ef-b970-441d-ab7d-b0655cb28e01.jpeg" alt="img-hotel" width="250px" style={{borderRadius:"6%"}}/>
                                </Col>
                                <Col>
                                <h4>Nama_Room</h4>
                                <p className="desc mt-2">Deskripsi</p>
                                <p className="desc ">Total_Penghuni</p>
                                <p className="desc ">Harga</p>
                                </Col>
                            </Row>
                            
                            
                        </div>
                    </div>
                    <div className="map">
                       {Map()}
                    </div>
                </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default DetailHotel