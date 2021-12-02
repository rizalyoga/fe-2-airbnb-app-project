import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./views/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../src/views/component/footer.jsx";
import DetailHotel from "./views/pages/detail-hotel/detail-hotel";
import NavBarPage from "./views/component/navbarPage";
import DetailRoom from "./views/pages/detail-hotel/detail-room";

function App() {
  return (
    <BrowserRouter>
      <NavBarPage/>
      {/* <DetailHotel/> */}
      {/* <Home /> */}
      <DetailRoom/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
