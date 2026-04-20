import { configureStore } from '@reduxjs/toolkit';
import wishListReducer from '../slice/wishListSlice';
import CartReducer from '../slice/cartSlice';

export default configureStore({
  reducer: {
    wishlist: wishListReducer,
    cart: CartReducer,
  },
});
