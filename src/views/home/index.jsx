// import NavBar from "../component/navbar";
import CardsKota from "../component/cardHome/card-kota.jsx";
// import CardsHome from "../component/cardHome/card.jsx";
import CardCoba from "../component/cardHome/card-coba.jsx";
// import NavBarPage from "../component/navbarPage";
import NavBarHome from "../component/navbarHome";

const Home = () => {
  return (
    <div>
      {/* <NavBarPage /> */}
      <NavBarHome />
      <CardsKota />
      <CardCoba />
      {/* <CardsHome /> */}
    </div>
  );
};

export default Home;
