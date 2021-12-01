import { useState } from "react";
import { Card, Button } from "react-bootstrap";

const CardsHome = () => {
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
    <section className="kota">
      <div className="card-home-hotel container d-flex justify-content-start flex-column  mt-5">
        <h2>Inspiration for your Next trip</h2>
        <div className="cards-container d-flex justify-content-center py-5 my-3 flex-wrap cards-wrap">
          {hotel.map((el, i) => (
            <Card className=" mx-auto my-2" style={{ width: "17rem" }} key={i}>
              <Card.Img variant="top" src={el.image} />
              <Card.Body>
                <Card.Title>{el.nama}</Card.Title>
                <div className="detail mt-0">
                  {/* <p>Keterangan</p> */}
                  <p>{el.harga}</p>
                </div>
                <Button variant="primary">Go Detail</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardsHome;
