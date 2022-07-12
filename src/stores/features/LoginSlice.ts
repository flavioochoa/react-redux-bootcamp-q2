import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { LoginState } from "../../models/LoginState";

const initialState: LoginState = {
  isLoggedIn: false,
  currentUser: null,
};

export const loginSlice = createSlice({
  name: "loginReducer",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.currentUser = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      return { ...state, ...initialState };
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
