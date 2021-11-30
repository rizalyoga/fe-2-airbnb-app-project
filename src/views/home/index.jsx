import NavBar from "../component/navbar";
import CardsKota from "../component/cardHome/card-kota.jsx";
import CardsHome from "../component/cardHome/card.jsx";

const Home = () => {
  return (
    <div>
      <NavBar />
      <CardsKota />
      <CardsHome />
    </div>
  );
};

export default Home;
