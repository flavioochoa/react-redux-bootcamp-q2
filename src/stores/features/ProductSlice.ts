import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { ProductResponse } from "../../models/Products";

const initialState: ProductResponse | null = null;

export const productSlice = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<ProductResponse>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { set } = productSlice.actions;

export default productSlice.reducer;
