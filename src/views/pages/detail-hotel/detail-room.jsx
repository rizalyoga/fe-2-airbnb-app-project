import "./detail-room.css"
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Button, Col, Row } from "react-bootstrap";
import 'react-calendar/dist/Calendar.css';
import NavBarPage from "../../component/navbarPage";



const DetailRoom = () =>{
    const [value1, setValue1] = useState(new Date());
    const [value2, setValue2] = useState(new Date());
    // console.log("tanggal checkin" ,value1)
    // console.log("tanggal checkout" ,value2.toLocaleString().split(',')[0])

    let hari = value2.getDate() - value1.getDate()
    console.log(hari);
    const harga = 20000

    const Buttonpesan=() =>{
        if(harga*hari <= 0 || localStorage.token == null ){
            return(
                <Button variant="danger" style={{width:"23vw"}} disabled> Pesan</Button>    
            )
        }else{
            return(
                <Button variant="danger" style={{width:"23vw"}}> Pesan</Button>    

            )
  
        }
    }

    return (
        <> 
        <NavBarPage/>
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
                        <div className="reservation">
                            <Row>
                                <Col>
                                <div>
                                    Checkin
                                <Calendar
                                    onChange={setValue1}
                                    value={value1}
                                />
                                </div>
                                </Col>
                                
                                <Col disabled><div>
                                Checkout
                                <Calendar
                                    onChange={setValue2}
                                    value={value2}
                                />
                                </div></Col>
                            </Row>
                    </div>
                    <div className="checkreservation px-4 py-3 mt-5">
                        <h5>Rp. {harga}/ malam</h5>
                        <br />
                        <div className="tanggal">
                            <div className="checkin py-1">
                                <h6>Checkin</h6>
                            <h5>{value1.toLocaleString().split(',')[0]}</h5>
                            </div>
                            <div className="checkout py-1">
                            <h6>Checkout</h6>
                            <h5>{value2.toLocaleString().split(',')[0]}</h5>
                            </div>

                        </div>
                        <div className="jumlah">
                            <Row>
                                <Col>{`Rp. ${harga} x ${hari} hari`}</Col>
                                <Col>Rp. {(harga)*(hari)} </Col>
                            </Row>
                        </div>
                       {Buttonpesan()}
                    </div>
                            
                 
                </div>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default DetailRoom