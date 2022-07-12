import cart from "./features/CartSlice";
import { combineReducers } from "@reduxjs/toolkit";
import login from "./features/LoginSlice";
import products from "./features/ProductSlice";

export default combineReducers({
  cart,
  products,
  login,
});
