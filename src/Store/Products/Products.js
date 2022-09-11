import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk('Products/getProduct', async (_, thunk) => {
  const {rejectWithValue} = thunk;
  try { 
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  }
  catch (error) {
    return rejectWithValue(error.message)
  }
});

const Products = createSlice({
  name: 'products',
  initialState: {Products: [], CopyProduct: [] ,filterProducts: [],isLoading: false, isError: null},
  reducers: {
    filterCategory: (state, action) => {
      state.Products = state.filterProducts.filter(item => item.category === action.payload)
      if (action.payload === "All") {
        state.Products = state.CopyProduct;
      }
    },
  },
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.Products = action.payload;
      state.filterProducts = action.payload;
      state.CopyProduct = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
})


export const { filterCategory } = Products.actions;
export default Products.reducer;