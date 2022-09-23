import React, { useEffect } from "react";
import "./Home.css";
import Slider from "../../Components/Slider/Slider";
import ProductList from "../../Components/ProductList/ProductList";
import { useSelector } from "react-redux";
import Carousel from "../../Components/Carousel/Carousel";

const Home = ({ FooterHandler }) => {
  const { isLoading, Products, isError } = useSelector(
    (state) => state.Products
  );

  useEffect(() => {
    return FooterHandler(true);
  }, [FooterHandler]);

  if (isLoading) {
    return <h3 style={{ textAlign: "center", padding: "20px" }}>Loading...</h3>;
  }

  if (isError) {
    return <h3 style={{ textAlign: "center", padding: "20px" }}>{isError}</h3>;
  }

  const Carousels = [...Products].reverse();

  return (
    <div className="Home">
      <div className="container">
        <div className="Wapper">
          <Slider Products={Products} />
          <ProductList Products={Products} />
        </div>
        <Carousel Products={Carousels} number={4} space={30} />
      </div>
    </div>
  );
};

export default Home;
