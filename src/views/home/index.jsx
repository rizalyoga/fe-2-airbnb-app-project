import { useEffect } from "react";
// import NavBar from "../component/navbar";
import CardsKota from "../component/cardHome/card-kota.jsx";
// import CardsHome from "../component/cardHome/card.jsx";
import CardCoba from "../component/cardHome/card-coba.jsx";
// import NavBarPage from "../component/navbarPage";
import NavBarHome from "../component/navbarHome";
// import ListHotel from "../pages/list-hotel/list-hotel.jsx";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../store/actions/index.js";

const Home = () => {
  const dispatch = useDispatch();
  const listHomestay = useSelector(({ listHomestay }) => listHomestay);

  useEffect(() => {
    dispatch(allStore.fetchHomestay());
  }, [dispatch]);

  // useEffect(() => {
  //   console.log(listHomestay);
  // }, [listHomestay]);

  return (
    <div>
      {/* <NavBarPage /> */}
      <NavBarHome />
      <CardsKota />
      <CardCoba listHomestay={listHomestay} />
      {/* <CardsHome /> */}
      {/* <ListHotel /> */}
    </div>
  );
};

export default Home;
