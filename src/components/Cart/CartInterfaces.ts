import { Item } from "../../models/Products";

export interface CartProduct extends Item {
  quantity: number;
}

export interface CartProducts {
  items: Array<CartProduct>;
}

export interface SummaryValues {
  totalItems: number;
  total: number;
}

export interface CartSummaryProps {
  cart: CartProducts;
}

export interface ChangeQuantityModel {
  id: number;
  quantity: number;
}
