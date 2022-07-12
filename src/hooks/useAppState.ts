import { useDispatch, useSelector } from "react-redux";

import { AppState } from "../models/AppState";

export const useAppState = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state: AppState) => state.cart);

  const products = useSelector((state: AppState) => state.products);

  const loginState = useSelector((state: AppState) => state.login);

  return { dispatch, cart, products, loginState };
};
