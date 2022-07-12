import { Item } from "../models/Products";
import { fetchProducts } from "../stores/features/ProductSlice";
import { useAppState } from "./useAppState";
import { useMessages } from "../components/Common/Messages/useMessages";

export const useProducts = () => {
  const { productsState, appDispatch } = useAppState();

  const { products, loading } = productsState;

  const { addErrorMessage } = useMessages();

  const fetch = async () => {
    try {
      appDispatch(fetchProducts());
    } catch (error) {
      console.log(error);
      addErrorMessage(JSON.stringify(error));
    }
  };

  const findProductById = (id: number): Item | undefined => {
    if (!products) {
      return undefined;
    }

    const result = products.items.find((item) => {
      return item.id === id;
    });

    return result;
  };

  return { fetch, products, loading, findProductById };
};
