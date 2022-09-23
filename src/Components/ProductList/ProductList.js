import React from "react";
import "./ProductList.css";
import { addCart ,getTotal} from "../../Store/Cart/Cart";
import {useDispatch} from "react-redux";

const ProductList = ({ Products }) => {
  const dispatch = useDispatch();

  const cartHandler = (item) => {
    dispatch(addCart(item))
  }

  return (
    <>
    <div className="product">
      {Products.map((item) => {
        return (
          <div className="product-wapper" key={item.id}>
            <img src={item.image} alt="" />
            <div className="info">
              <div className="title">
                <span>{item.title.slice(0, 55)}</span>
              </div>
              <div className="info-wapper">
                <div className="Price">
                  <span>${item.price.toFixed(2)}</span>
                </div>
                <button onClick={() => cartHandler(item)}>Add to Cart</button>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
};

export default ProductList;
