import { configureStore } from '@reduxjs/toolkit';
import wishListSlice from '../slice/wishListSlice';

export default configureStore({
  reducer: {
    wishlist: wishListSlice,
  },
});
