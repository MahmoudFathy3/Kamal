import React, {useState} from "react";
import "./Cart.css";
import { useSelector , useDispatch} from "react-redux";
import { removeCart } from "../../Store/Cart/Cart";

const Cart = () => {

  const { Cart } = useSelector((state) => state.Cart);
  const dispatch = useDispatch();



  if (!Cart.length) {
    return (
      <h3 style={{ textAlign: "center", padding: "20px" }}>
        The Cart is empty
      </h3>
    );
  }

  let total = 0;
  
  const List = Cart.map((item) => {
    total += Number(item.price)
    return (
      <div key={item.id} className="cart-list">
        <div className="cart-image">
          <img src={item.image} alt={item.image} />
        </div>
        <div className="cart-info">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <span>${item.price.toFixed(2)}</span>
          <div className="cart-btn">
            <button onClick={() => dispatch(removeCart(item.id))}>Remove</button>
          </div>
        </div>
      </div>
    );
  });
  


  return (
    <div className="Carts">
      <div className="container">
        {List}
        <div className="cart-total">
          <div className="total-price">
            <h3>Total: <span>{total && `$${total}`}</span></h3>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
