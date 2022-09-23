import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Navbar from "../Layout/Navbar/Navbar";
import Footer from "../Layout/Footer/Footer";
import Cart from "../Pages/Cart/Cart";
import Found from "../Pages/Found/Found";


const Navigation = ({FooterHandler, hidden}) => {
  return (
    <BrowserRouter>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home FooterHandler={FooterHandler}/>} />
      <Route path="about" element={<About FooterHandler={FooterHandler}/>} />
      <Route path="contact" element={<Contact FooterHandler={FooterHandler}/>} />
      <Route path="cart" element={<Cart FooterHandler={FooterHandler} />} />
      <Route path="not-found" element={<Found />} />
    </Routes>
    {hidden && <Footer />}
  </BrowserRouter>

  )
}

export default Navigation