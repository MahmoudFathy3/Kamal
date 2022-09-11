import { createSlice } from '@reduxjs/toolkit';


const Carts = createSlice({
  name: 'cart',
  initialState: { Cart: [] , isLoading: false },
  reducers: {
    addCart: (state, action) => {
      state.Cart.push(action.payload);
    },
    removeCart: (state, action) => {
      state.Cart = state.Cart.filter(item => item.id !== action.payload)
    },
  },
})


export const { addCart , removeCart } = Carts.actions;
export default Carts.reducer;