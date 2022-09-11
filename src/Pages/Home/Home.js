import React from "react";
import "./Home.css";
import Slider from "../../Components/Slider/Slider";
import ProductList from "../../Components/ProductList/ProductList";
import { useSelector } from "react-redux";

const Home = () => {

  const {isLoading, Products, isError} = useSelector(state => state.Products);

  if (isLoading) {
    return <h3 style={{textAlign: 'center', padding: '20px'}}>Loading...</h3>;
  }
  if (isError) {
    return <h3 style={{textAlign: 'center', padding: '20px'}}>{isError}</h3>;
  }

  return (
    <div className="Home">
      <div className="container">
        <div className="Wapper">
          <Slider Products={Products}/>
          <ProductList Products={Products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
