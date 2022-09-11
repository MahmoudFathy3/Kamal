import React from "react";
import "./Slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import  {filterCategory}  from "../../Store/Products/Products";
import { useDispatch } from "react-redux";

const Slider = () => {
  const dispatch = useDispatch();
  

  return (
    <div className="Slider">
      <div className="Slider-Logo">
        <span>Filter Products</span>
      </div>
      <div className="Slider-Category">
        <FontAwesomeIcon icon={faBox} className="icon" />
        <span>Categoires</span>
        <ul>
          <li onClick={() => dispatch(filterCategory("All"))}>All</li>
          <li onClick={() => dispatch(filterCategory("men's clothing"))}>Men's Clothing</li>
          <li onClick={() => dispatch(filterCategory("jewelery"))}>Jewelery</li>
          <li onClick={() => dispatch(filterCategory("electronics"))}>Electronics</li>
          <li onClick={() => dispatch(filterCategory("women's clothing"))}>Women's Clothing</li>
        </ul>
      </div>
    </div>
  );
};

export default Slider;
