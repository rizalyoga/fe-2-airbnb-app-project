import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./views/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../src/views/component/footer.jsx";
import FormUser from "../src/views/component/Form-User/form-user.jsx";
import NavbarHome from "./views/component/navbarHome.jsx";
// import allStore from "./store/actions/index.js"

function App() {
  return (
    <BrowserRouter>
      <NavbarHome />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<FormUser />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
