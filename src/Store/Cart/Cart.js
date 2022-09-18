import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const Carts = createSlice({
  name: "cart",
  initialState: { Cart: [], cartTotalQuantity: 0, cartTotalAmount: 0 },
  reducers: {
    addCart: (state, action) => {
      const itemIndex = state.Cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.Cart[itemIndex].cartQuantity += 1;
        toast.info("Increased Product quantity", {
          position: "bottom-left",
        });
      } else {
        state.Cart.push({ ...action.payload, cartQuantity: 1 });
        toast.success("Add New Product to Cart", {
          position: "bottom-left",
        });
      }
    },

    removeCart: (state, action) => {
      state.Cart = state.Cart.filter((item) => item.id !== action.payload);

      toast.error("Remove a Product to Cart", {
        position: "bottom-left",
      });
    },

    decreaseCart: (state, action) => {
      const itemIndex = state.Cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.Cart[itemIndex].cartQuantity > 1) {
        state.Cart[itemIndex].cartQuantity -= 1;

        toast.info("Decreased a Product to Cart quantity", {
          position: "bottom-left",
        });
      } else if (state.Cart[itemIndex].cartQuantity === 1) {
        state.Cart = state.Cart.filter((item) => item.id !== action.payload.id);

        toast.error("Remove a Product to Cart", {
          position: "bottom-left",
        });
      }
    },

    getTotal: (state, action) => {
      let { total, quantity } = state.Cart.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
      },
    }, // End reducers
});

export const { addCart, removeCart, decreaseCart, getTotal } =
  Carts.actions;
export default Carts.reducer;
