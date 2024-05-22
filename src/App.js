import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Navbar } from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
