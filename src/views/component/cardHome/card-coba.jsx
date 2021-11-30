import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import "./card-coba.css";

const CardCoba = () => {
  const [hotel, setHotel] = useState([
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

  return (
    <section className="hotel-sec">
      <div className="card-home-hotel container d-flex justify-content-start flex-column">
        <h2 className="fw-bolder">Inspiration for your Next trip</h2>
        <div className="cards-container d-flex justify-content-start py-5 my-3 flex-wrap cards-wrap">
          {hotel.map((el, i) => (
            <div className="col-md-3 mx-0 rounded w-90 " key={i}>
              <div className="card mt-3 mx-2 mt-5">
                <div className="hotel align-items-center rounded text-center">
                  <img className="rounded" width="100%" height="200" src={el.image} />
                  <div className="mt-2 px-2 d-flex justify-content-between">
                    <h5 className="fw-normal">{el.nama}</h5>
                    <div className="star  align-items-center">
                      <i>rating</i>
                    </div>
                  </div>

                  {/* card-information */}
                  <div className="m-1 info">
                    <span className="text1 d-block">Lorem ipsum dolor sit amet.</span>
                    <span className="text1">Lorem, ipsum dolor.</span>
                  </div>
                  <div className="cost my-1 text-dark">
                    <span style={{ color: "#4176E7" }}>{el.harga}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardCoba;
