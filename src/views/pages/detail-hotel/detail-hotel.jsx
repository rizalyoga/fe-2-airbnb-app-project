import React, { useEffect, useState } from "react";
import "./detail-hotel.css";
import img from "../../../assets/banner.jpg";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Col, Row } from "react-bootstrap";
import NavBarPage from "../../component/navbarPage";
/* --------------------------------- TAMBAH --------------------------------- */
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import allStore from "../../../store/actions/index.js";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
/* ----------------------------------- -- ----------------------------------- */

const DetailHotel = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  //   GET DATA DARI DETAILS HOMESTAY
  const detailHomeStay = useSelector(({ detailHomestay }) => detailHomestay);
  const listRooms = useSelector(({ listRooms }) => listRooms);
  const loading = useSelector(({ loading }) => loading);

  useEffect(() => {
    dispatch(allStore.fetchHomestayDetail(id));
  }, [dispatch, id]);

  //   GET LIST ROOMS
  useEffect(() => {
    dispatch(allStore.fetchRooms());
  }, [dispatch]);

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

  const toNavigateRoom = (data) => {
    navigate(`/detailRoom/${data}`);
  };

  const Map = () => {
    if (!detailHomeStay.Latitude && !detailHomeStay.Longitude) {
      return <></>;
    }
    const position = [detailHomeStay.Latitude, detailHomeStay.Longitude];

    return (
      <MapContainer center={position} zoom={18} scrollWheelZoom={true}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>{detailHomeStay.Nama}</Popup>
        </Marker>
      </MapContainer>
    );
  };

  return (
    <>
      <NavBarPage />
      <div className="container-hotel">
        <div className="content">
          <div className="hotel-name">
            <div>
              <h3>{detailHomeStay.Nama}</h3>
              <p>{detailHomeStay.Alamat}</p>
              <div className="hotel-pict">
                <img src={detailHomeStay.Url} alt="gambar" width="100%" />
              </div>
            </div>
            <div className="select-room mt-5">
              <h3> List Room </h3>
            </div>
            <div className="continer-room mt-3">
              <div className="list-room">
                <div className="room-name">
                  {listRooms.map((element, i) => {
                    if (element.HomeStayID !== detailHomeStay.ID) {
                      console.log(typeof element.HomeStayID);
                      return <></>;
                    } else if (element.HomeStayID === detailHomeStay.ID) {
                      return (
                        <Row className="mb-4" key={i}>
                          <Col md="auto">
                            <img src={element.Url} alt="img-hotel" width="250px" style={{ borderRadius: "6%" }} />
                          </Col>
                          <Col>
                            <h4>{element.Nama_Room}</h4>
                            <p className="desc mt-2">{element.Deskripsi}</p>
                            <p className="desc ">{`${element.Total_Penghuni} orang`}</p>
                            <p className="desc ">{`Rp ${element.Harga},00`}</p>
                            <button className="btn btn-danger" onClick={() => toNavigateRoom(element.ID)}>
                              Reserve
                            </button>
                          </Col>
                        </Row>
                      );
                    }
                  })}
                </div>
              </div>
              <div className="map">{Map()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailHotel;
