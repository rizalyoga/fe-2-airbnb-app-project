import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./views/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../src/views/component/footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Home />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
