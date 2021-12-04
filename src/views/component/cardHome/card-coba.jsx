import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Card } from "react-bootstrap";
import "./card-coba.css";

const CardCoba = (props) => {
  const [hotel] = useState([
    {
      nama: "Gardenia",
      harga: "200000",
      image: "https://www.tourismupdate.co.za/sites/default/files/images/article/202103/houghtonhotel.jpg",
    },
    {
      nama: "Mawar",
      harga: "200000",
      image: "https://www.tourismupdate.co.za/sites/default/files/images/article/202103/houghtonhotel.jpg",
    },
    {
      nama: "Melati-Malang",
      harga: "200000",
      image: "https://www.tourismupdate.co.za/sites/default/files/images/article/202103/houghtonhotel.jpg",
    },
    {
      nama: "Bandung-Hill",
      harga: "200000",
      image: "https://www.tourismupdate.co.za/sites/default/files/images/article/202103/houghtonhotel.jpg",
    },
    {
      nama: "Gardenia",
      harga: "200000",
      image: "https://www.tourismupdate.co.za/sites/default/files/images/article/202103/houghtonhotel.jpg",
    },
    {
      nama: "Mawar",
      harga: "200000",
      image: "https://www.tourismupdate.co.za/sites/default/files/images/article/202103/houghtonhotel.jpg",
    },
    {
      nama: "Melati-Malang",
      harga: "200000",
      image: "https://www.tourismupdate.co.za/sites/default/files/images/article/202103/houghtonhotel.jpg",
    },
    {
      nama: "Bandung-Hill",
      harga: "200000",
      image: "https://www.tourismupdate.co.za/sites/default/files/images/article/202103/houghtonhotel.jpg",
    },
  ]);

  const navigate = useNavigate();

  const toNavigate = (id) => {
    navigate(`/homestay/${id}`);
  };

  return (
    <div className="hotel-sec">
      <div className="card-home-hotel container d-flex justify-content-start flex-column">
        <h2 className="fw-bolder" style={{ color: "#252839" }}>
          Inspiration for your Next trip
        </h2>
        <div className="cards-container d-flex justify-content-start py-5 my-3 flex-wrap cards-wrap">
          {props.listHomestay.map((el, i) => (
            <div
              className="col-md-3 mx-0 rounded w-90 "
              key={i}
              onClick={() => {
                toNavigate(el.ID);
              }}
            >
              <div className="card-homstay mt-3 mx-2 mt-1">
                <div className="hotel align-items-center rounded text-center">
                  <img className="rounded" width="100%" height="200" src="https://www.tourismupdate.co.za/sites/default/files/images/article/202103/houghtonhotel.jpg" />
                  <div className="mt-2 px-2 d-flex justify-content-center">
                    <h5 className="fw-normal text-center">{el.Nama}</h5>
                  </div>
                  {/* card-information */}
                  <div className="m-1 info">
                    <span className="text1 d-block">{el.Alamat}</span>
                  </div>
                  <div className="cost my-1 text-dark p-1">
                    <span style={{ color: "#dc3545" }}>{el.Rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCoba;
