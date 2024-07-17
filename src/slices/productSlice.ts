// src/slices/productSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../interfaces/IProduct";
import { products } from "../data/products";

interface ProductState {
  products: IProduct[];
}

const initialState: ProductState = {
  products,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
