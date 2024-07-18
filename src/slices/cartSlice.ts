import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../interfaces/IProduct";

interface CartState {
  items: IProduct[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<IProduct>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      state.items.push({ ...action.payload });
    },
    removeItemFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
