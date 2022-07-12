import {
  ErrorResponse,
  ProductsState,
  RejectWithValue,
} from "../../models/AppState";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { AxiosError } from "axios";
import AxiosInstance from "../../utils/AxiosInstance";
import { BASE_URL } from "../../data/Constants";
import { ProductResponse } from "../../models/Products";

const initialState: ProductsState = {
  products: null,
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk<
  ProductResponse,
  void,
  RejectWithValue
>("products/fetch", async (_, { rejectWithValue }) => {
  try {
    const response = await AxiosInstance.get<ProductResponse>(
      `${BASE_URL}/products`
    );

    return response.data;
  } catch (err) {
    console.log(err);
    let error: AxiosError<ErrorResponse> = err;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});

export const productSlice = createSlice({
  name: "productReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
