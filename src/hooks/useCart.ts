import {
  CartProducts,
  ChangeQuantityModel,
} from "../components/Cart/CartInterfaces";
import {
  add,
  changeQuantity,
  postOrder,
  remove,
  restart,
} from "../stores/features/CartSlice";

import { Item } from "../models/Products";
import { useAppState } from "./useAppState";
import { useMessages } from "../components/Common/Messages/useMessages";
import { useSummaryValues } from "./useSummaryValues";

export const useCart = () => {
  const { dispatch, cartState, appDispatch } = useAppState();
  const { addErrorMessage, addSuccessMessage } = useMessages();

  const { getTotalForCurrentItem, getSummaryValues } = useSummaryValues();

  const addToCart = (product: Item) => {
    dispatch(add(product));
    addSuccessMessage("Added to cart");
  };

  const removeFromCart = (id: number) => {
    dispatch(remove(id));
  };

  const changeProductQuantity = (params: ChangeQuantityModel) => {
    dispatch(changeQuantity(params));
  };

  const canCreateOrder = (cart: CartProducts) => {
    const result = getSummaryValues(cart);
    return result.totalItems > 0;
  };

  const checkout = () => {
    if (canCreateOrder(cartState)) {
      appDispatch(postOrder());
    } else {
      addErrorMessage("Can't create order, add at least one product");
    }
  };

  const restartCart = () => {
    dispatch(restart());
  };

  return {
    cartState,
    add,
    removeFromCart,
    changeProductQuantity,
    getTotalForCurrentItem,
    getSummaryValues,
    checkout,
    addToCart,
    restartCart,
  };
};
