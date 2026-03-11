import { createSlice } from '@reduxjs/toolkit';

const wishlist = createSlice({
  name: 'wishlist',
  initialState: {
    items: [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      const exist = state.items.find(item => item._id === action.payload._id);

      if (!exist) state.items.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(item => item._id !== action.payload._id);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlist.actions;
export default wishlist.reducer;
