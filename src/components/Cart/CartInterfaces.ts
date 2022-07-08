import { Item } from "../../models/Products";

export interface CardProduct extends Item {
  quantity: number;
}

export interface CardProducts {
  items: Array<CardProduct>;
}

export interface SummaryValues {
  totalItems: number;
  total: number;
}

export interface CartSummaryProps {
  selectedProducts: CardProducts;
}
