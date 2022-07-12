import { CartProducts } from "../components/Cart/CartInterfaces";
import { LoginState } from "./LoginState";
import { MessagesState } from "../components/Common/Messages/MessageInterfaces";
import { ProductResponse } from "./Products";

export interface AppState {
  cart: CartState;
  products: ProductsState;
  login: LoginState;
  messages: MessagesState;
}

export interface ProductsState {
  products: ProductResponse | null;
  loading: boolean;
  error: string | null;
}

export interface ErrorResponse {
  errorMessage: string;
}

export interface RejectWithValue {
  rejectValue: ErrorResponse;
}

export interface CartState extends CartProducts {
  loading: boolean;
  error: string;
  orderStatus: OrderStatus;
}

export enum OrderStatus {
  InProgress = "IN_PROGRESS",
  Fulfilled = "FULLFILLED",
  NoItems = "NO_ITEMS",
}
