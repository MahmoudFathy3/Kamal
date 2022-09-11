import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Navbar from "./Layout/Navbar/Navbar";
import Footer from "./Layout/Footer/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {getProducts } from "./Store/Products/Products";
import Cart from "./Pages/Cart/Cart";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  },[dispatch])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
