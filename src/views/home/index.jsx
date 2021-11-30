import NavBar from "../component/navbar";
import CardsKota from "../component/cardHome/card-kota.jsx";
// import CardsHome from "../component/cardHome/card.jsx";
import CardCoba from "../component/cardHome/card-coba.jsx";

const Home = () => {
  return (
    <div>
      <NavBar />
      <CardsKota />
      <CardCoba />
      {/* <CardsHome /> */}
    </div>
  );
};

export default Home;
