import { useDispatch, useSelector } from "react-redux";

import { AppState } from "../models/AppState";
import { useAppDispatch } from "../stores/store";

export const useAppState = () => {
  const appDispatch = useAppDispatch();

  const dispatch = useDispatch();

  const cartState = useSelector((state: AppState) => state.cart);

  const productsState = useSelector((state: AppState) => state.products);

  const loginState = useSelector((state: AppState) => state.login);

  const messagesState = useSelector((state: AppState) => state.messages);

  return {
    appDispatch,
    dispatch,
    cartState,
    productsState,
    loginState,
    messagesState,
  };
};
