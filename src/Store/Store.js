import { configureStore } from "@reduxjs/toolkit";
import Products from "./Products/Products";
import Cart from "./Cart/Cart";

const Store = configureStore({
  reducer: {
    Products,
    Cart,
  },
});

export default Store;