import React, {useEffect, useMemo} from "react";
import "./Cart.css";
import { useSelector , useDispatch} from "react-redux";
import { removeCart, decreaseCart, addCart, getTotal } from "../../Store/Cart/Cart";

const Cart = ({FooterHandler}) => {
  const { Cart, cartTotalAmount} = useSelector((state) => state.Cart);
  const dispatch = useDispatch();

  useEffect(() => {
    FooterHandler()
  }, [FooterHandler, dispatch])
  
  useMemo(() => {
    return dispatch(getTotal())
  }, [dispatch])


  if (!Cart.length) {
    return (
      <h3 style={{ textAlign: "center", padding: "20px" }}>
        The Cart is empty
      </h3>
    );
  }

  const List = Cart?.map((item) => {
    let Price = item.price * item.cartQuantity;
    return (
      <tbody key={item.id}>
        <tr>
          <td><img src={item.image} alt={item.image} /></td>
          <td>{item.title}</td>
          <td>{item.description}</td>
          <td>
            <div className="quantity">
              <button onClick={() => dispatch(decreaseCart(item))}>-</button>
              <p>{item.cartQuantity}</p>
              <button onClick={() => dispatch(addCart(item))}>+</button>
            </div>
          </td>
          <td>${Price.toFixed(2)} </td>
          <td><button className="remove" onClick={() => dispatch(removeCart(item.id))}>Remove</button></td>
        </tr>
      </tbody>
    );
  });
  
  return (
    <div className="Carts">
      <div className="cart-Wapper">
        <div className="cart-list">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
              {List}
          </table>
        </div>
        <div className="cart-total">
          <div className="total-wapper">
            ${cartTotalAmount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
