import React,{useState} from "react";
import "./Slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import  {filterCategory}  from "../../Store/Products/Products";
import { useDispatch } from "react-redux";
import Carousel from "../Carousel/Carousel";

const Slider = ({Products}) => {
  const [active,setActive]= useState('All')
  const dispatch = useDispatch();


  const FilterHandler = (e) => {
    setActive(e.target.textContent)
    if (e.target.textContent === 'All') { 
      dispatch(filterCategory(e.target.textContent));
    } else {
      dispatch(filterCategory(e.target.textContent.toLowerCase()));
    }
  }

  return (
    <div className="Slider">
      <div className="Slider-Logo">
        <span>Filter Products</span>
      </div>
      <div className="Slider-Category">
        <FontAwesomeIcon icon={faBox} className="icon" />
        <span>Categoires</span>
        <ul>
          <li className={active === 'All' ? 'active': null} onClick={FilterHandler}>All</li>
          <li className={active === "Men's Clothing" ? 'active': null} onClick={FilterHandler}>Men's Clothing</li>
          <li className={active === 'Jewelery' ? 'active': null} onClick={FilterHandler}>Jewelery</li>
          <li className={active === 'Electronics' ? 'active': null} onClick={FilterHandler}>Electronics</li>
          <li className={active === "Women's Clothing" ? 'active': null} onClick={FilterHandler}>Women's Clothing</li>
        </ul>
      </div>
      <Carousel Products={Products} number={1} space={0}/>
      
    </div>
  );  
};

export default Slider;
