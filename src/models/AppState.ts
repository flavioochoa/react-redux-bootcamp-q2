import { CartProducts } from "../components/Cart/CartInterfaces";
import { LoginState } from "./LoginState";
import { ProductResponse } from "./Products";

export interface AppState {
  cart: CartProducts;
  products: ProductResponse | null;
  login: LoginState;
}
