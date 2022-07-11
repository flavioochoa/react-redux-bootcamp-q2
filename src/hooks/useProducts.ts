import { ProductResponse } from "../models/Products";
import data from "../utils/stub/products.stub.json";
import { mockRequest } from "../utils/mockRequest";
import { set } from "../stores/features/ProductSlice";
import { useAppState } from "./useAppState";

export const useProducts = () => {
  const { products, dispatch } = useAppState();

  const fetch = async () => {
    try {
      const response = await mockRequest<ProductResponse>(data, 1000);
      dispatch(set(response));
    } catch (error) {
      console.log(error);
    }
  };

  return { fetch, products };
};
