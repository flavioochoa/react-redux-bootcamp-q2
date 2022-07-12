import {
  CartProduct,
  ChangeQuantityModel,
} from "../components/Cart/CartInterfaces";
import { Item, ProductResponse } from "../models/Products";
import { add, changeQuantity, remove, set } from "../stores/features/CartSlice";

import data from "../utils/stub/products.stub.json";
import { mockRequest } from "../utils/mockRequest";
import { useAppState } from "./useAppState";
import { useSummaryValues } from "./useSummaryValues";

export const useCart = () => {
  const { dispatch, cart } = useAppState();

  const { getTotalForCurrentItem, getSummaryValues } = useSummaryValues();

  // TODO: this function is going to be removed when the app is hooked up with the redux toolkit
  // Randomly add products & quantities to selectedProducts state from mock data
  const getRandomProducts = async () => {
    try {
      const response = await mockRequest<ProductResponse>(data, 1000);

      const shuffled = response.data.products.items
        .slice()
        .sort(() => 0.5 - Math.random());

      // Get sub-array of first n elements after shuffled
      const randomQuantity = Math.floor(Math.random() * 10) + 1;
      let selected = shuffled.slice(0, randomQuantity);

      const result: Array<CartProduct> = selected.map((item) => {
        const randomQuantity = Math.floor(Math.random() * 10) + 1;
        return { ...item, quantity: randomQuantity };
      });

      dispatch(set({ items: result }));
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = (product: Item) => {
    dispatch(add(product));
  };

  const removeFromCart = (id: number) => {
    dispatch(remove(id));
  };

  const changeProductQuantity = (params: ChangeQuantityModel) => {
    dispatch(changeQuantity(params));
  };

  const checkout = () => {
    alert("Checkout in progress");
  };

  return {
    cart,
    add,
    removeFromCart,
    changeProductQuantity,
    getRandomProducts,
    getTotalForCurrentItem,
    getSummaryValues,
    checkout,
    addToCart,
  };
};
