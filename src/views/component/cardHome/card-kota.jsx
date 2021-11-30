import lombok from "../../../assets/lombok.png";
import Bali from "../../../assets/Bali.png";
import Malang from "../../../assets/Malang.png";
import "./cards-kota.css";

const cardsKota = () => {
  return (
    <section className="kota mt-5">
      <div className="container mt-5">
        <h2 className="fw-bolder">Inspiration for your Next trip</h2>
        <div className="cards-container">
          <div className="row">
            <div className="kota-kol">
              <img src={lombok} alt="#" />
              <div className="layer">
                <h3 className="text-center">Lombok</h3>
              </div>
            </div>
            <div className="kota-kol">
              <img src={Bali} alt="#" />
              <div className="layer">
                <h3 className="text-center">Malang</h3>
              </div>
            </div>
            <div className="kota-kol">
              <img src={Malang} alt="#" />
              <div className="layer">
                <h3 className="text-center">Bali</h3>
              </div>
            </div>
            <div className="kota-kol">
              <img src={Malang} alt="#" />
              <div className="layer">
                <h3 className="text-center">Bali</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default cardsKota;
