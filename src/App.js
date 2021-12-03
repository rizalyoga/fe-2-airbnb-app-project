import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./views/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../src/views/component/footer.jsx";

import FormUser from "../src/views/component/Form-User/form-user.jsx";
import NavbarHome from "./views/component/navbarHome.jsx";
// import ListHotel from "./views/pages/list-hotel/list-hotel.jsx";
// import allStore from "./store/actions/index.js"

import DetailHotel from "./views/pages/detail-hotel/detail-hotel";
import DetailRoom from "./views/pages/detail-hotel/detail-room";
// import NavBarPage from "./views/component/navbarPage";

function App() {
  return (
    <BrowserRouter>
      <NavbarHome />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<FormUser />} />
        <Route path="/detailRoom" element={<DetailRoom />} />
        <Route path="/detailHotel" element={<DetailHotel />} />
      </Routes>
      {/* <NavBarPage/> */}
      {/* <Home /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
