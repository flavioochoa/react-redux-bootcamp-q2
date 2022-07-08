import { Item, ProductResponse } from "../models/Products";

import { CardProducts } from "../components/Cart/CartInterfaces";
import data from "../utils/stub/products.stub.json";
import { mockRequest } from "../utils/mockRequest";
import { useState } from "react";
import { useSummaryValues } from "./useSummaryValues";

export const useCart = () => {
  const [selectedProducts, setSelectedProducts] = useState<CardProducts>({
    items: [],
  });

  const { getTotalForCurrentItem, getSummaryValues } = useSummaryValues();

  // TODO: this function is going to be removed when the app is hooked up with the redux toolkit
  // Randomly add products & quantities to selectedProducts state from mock data
  const getRandomProducts = async () => {
    try {
      const response = await mockRequest<ProductResponse>(data, 1000);

      const shuffled = response.data.products.items.sort(
        () => 0.5 - Math.random()
      );

      // Get sub-array of first n elements after shuffled
      let selected = shuffled.slice(0, 5);

      const result = selected.map((item) => {
        const randomQuantity = Math.floor(Math.random() * 10) + 1;
        return { ...item, quantity: randomQuantity };
      });

      setSelectedProducts({ items: result });
    } catch (error) {
      console.log(error);
    }
  };

  const addSelectedProduct = (product: Item) => {
    //TODO add logic to add to cart
    console.log(product);
  };

  const removeSelectedProduct = (id: number) => {
    //TODO add logic to remove from cart
    console.log(id);
  };

  const changeProductQuantity = (id: number, newQuantity: number) => {
    //TODO add logic to remove from cart
    console.log(id, newQuantity);
  };

  const checkout = () => {
    console.log("checkout");
  };

  return {
    selectedProducts,
    addSelectedProduct,
    removeSelectedProduct,
    changeProductQuantity,
    getRandomProducts,
    getTotalForCurrentItem,
    getSummaryValues,
    checkout,
  };
};
