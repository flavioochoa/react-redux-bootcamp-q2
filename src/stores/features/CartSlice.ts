import {
  CartProducts,
  ChangeQuantityModel,
  OrderResponse,
} from "../../components/Cart/CartInterfaces";
import {
  CartState,
  ErrorResponse,
  OrderStatus,
  RejectWithValue,
} from "../../models/AppState";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { AxiosError } from "axios";
import AxiosInstance from "../../utils/AxiosInstance";
import { BASE_URL } from "../../data/Constants";
import { Item } from "../../models/Products";
import { findIndexById } from "../../utils/utils";

const initialState: CartState = {
  items: [],
  loading: false,
  error: "",
  orderStatus: OrderStatus.NoItems,
};

export const postOrder = createAsyncThunk<OrderResponse, void, RejectWithValue>(
  "cart/order",
  async (_, { rejectWithValue }) => {
    try {
      const response = await AxiosInstance.post<OrderResponse>(
        `${BASE_URL}/orders`
      );

      return response.data;
    } catch (err) {
      console.log(err);
      let error: AxiosError<ErrorResponse> = err; // cast the error for access
      if (!error.response) {
        throw err;
      }
      // We got validation errors, let's return those so we can reference in our component and set form errors
      return rejectWithValue(error.response.data);
    }
  }
);

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

      const index = findIndexById(items, product.id);

      if (index > -1) {
        items[index] = { ...items[index], quantity: items[index].quantity + 1 };
      } else {
        items.push({ ...product, quantity: 1 });
      }

      state.orderStatus = OrderStatus.InProgress;
    },
    remove: (state, action: PayloadAction<number>) => {
      const { items } = state;
      const { payload: id } = action;
      const index = findIndexById(items, id);

      if (index !== -1) {
        items.splice(index, 1);

        if (!items.length) {
          state.orderStatus = OrderStatus.NoItems;
        }
      }
    },
    changeQuantity: (state, action: PayloadAction<ChangeQuantityModel>) => {
      const { items } = state;
      const {
        payload: { id, quantity },
      } = action;
      const index = findIndexById(items, id);

      if (index !== -1) {
        items[index].quantity = quantity;
      }
    },
    restart: (state) => {
      return { ...state, ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postOrder.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(postOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.items = [];
      state.orderStatus = OrderStatus.Fulfilled;
    });
    builder.addCase(postOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { set, add, remove, changeQuantity, restart } = cartSlice.actions;

export default cartSlice.reducer;
