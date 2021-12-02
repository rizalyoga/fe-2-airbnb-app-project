import "./detail-hotel.css"
import img from '../../../assets/banner.jpg'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { Col, Row } from "react-bootstrap"



const DetailRoom = () =>{
    return (
        <> 
        <div className="container-hotel">
            <div className="content">
                <div className="hotel-name">
                    <h3>Hotel Name -- Room Name </h3>
                    <p>Jln.Bantul, Bantul, Yogyakarta </p>
                    <div className="hotel-pict">
                    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-52686735/original/e4f352ef-b970-441d-ab7d-b0655cb28e01.jpeg" alt="gambar" width="100%" />
                    </div>
                <div className="select-room mt-5"><h3> Reservation </h3></div>
                <div className="continer-room mt-3">
                    <div className="list-room">
                        <div className="room-name">
                           
                        </div>
                    </div>
                 
                </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default DetailRoom