import {
  CartProducts,
  ChangeQuantityModel,
} from "../../components/Cart/CartInterfaces";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Item } from "../../models/Products";

const initialState: CartProducts = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<CartProducts>) => {
      return { ...state, ...action.payload };
    },
    add: (state, action: PayloadAction<Item>) => {
      const { items } = state;
      const { payload: product } = action;
      const index = items.findIndex((productItem) => {
        return productItem.id === product.id;
      });
      if (index > -1) {
        const productToBeUpdated = items[index];
        const quantity = productToBeUpdated.quantity + 1;
        items[index] = { ...productToBeUpdated, quantity };
      } else {
        items.push({ ...product, quantity: 1 });
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      const { items } = state;
      const { payload: id } = action;
      const index = items.findIndex((product) => product.id === id);
      if (index !== -1) {
        items.splice(index, 1);
      }
    },
    changeQuantity: (state, action: PayloadAction<ChangeQuantityModel>) => {
      const { items } = state;
      const {
        payload: { id, quantity },
      } = action;
      const index = items.findIndex((product) => product.id === id);
      if (index !== -1) {
        items[index].quantity = quantity;
      }
    },
  },
});

export const { set, add, remove, changeQuantity } = cartSlice.actions;

export default cartSlice.reducer;
