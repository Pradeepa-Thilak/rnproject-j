import { createSlice } from '@reduxjs/toolkit';

const cart = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const exist = state.cartItems.find(
        (item) => item._id === action.payload._id,
      );
      const defaultSize = action.payload._source.Sizes.find(
        (size) => size.IsDefault === 1,
      );

      if (exist) {
        exist.quantity += 1;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
          selectedSize: defaultSize.Name,
        });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id,
      );
    },
    increaseQty: (state, action) => {
      const item = state.cartItems.find(
        (item) => item._id === action.payload._id,
      );

      if (item) item.quantity += 1;
    },
    decreaseQty: (state, action) => {
      const item = state.cartItems.find(
        (item) => item._id === action.payload._id,
      );

      if (!item) return;

      if (item.quantity > 1) item.quantity -= 1;
      else state.cartItems.filter((item) => item._id !== action.payload._id);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    updateSize: (state, action) => {
      const { id, size } = action.payload;

      const exist = state.cartItems.find((item) => item._id === id);
      if (exist) {
        exist.selectedSize = size;
        exist.quantity = 1;
      }
    },
    updateQty: (state, action) => {
      const { id, qty } = action.payload;

      const exist = state.cartItems.find((item) => item._id === id);
      if (exist) {
        exist.quantity = qty;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
  updateSize,
  updateQty,
} = cart.actions;
export default cart.reducer;
