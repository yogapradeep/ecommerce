import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IProduct } from "../interfaces/IProduct";
import { fetchProducts as fetchProductsAPI } from "../services/product.service";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const data = await fetchProductsAPI();
    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [] as IProduct[],
    status: "idle",
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export default productSlice.reducer;
