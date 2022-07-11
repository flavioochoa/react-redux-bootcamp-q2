import {
  CartProduct,
  CartProducts,
  SummaryValues,
} from "../components/Cart/CartInterfaces";

export const useSummaryValues = () => {
  const getTotalForCurrentItem = (currentValue: CartProduct) => {
    const { quantity: unsafeQuantity, price } = currentValue;
    const quantity = isNaN(unsafeQuantity) ? 0 : unsafeQuantity;
    const totalForCurrentItem = quantity * price;

    return { quantity, price, totalForCurrentItem };
  };

  const getSummaryValues = (cart: CartProducts) => {
    const initialSummaryValues: SummaryValues = {
      totalItems: 0,
      total: 0,
    };

    const summary = cart.items.reduce((previousValue, currentValue) => {
      const { quantity, totalForCurrentItem } =
        getTotalForCurrentItem(currentValue);
      const totalItems = previousValue.totalItems + quantity;
      const total = previousValue.total + totalForCurrentItem;
      return { totalItems, total };
    }, initialSummaryValues);

    return summary;
  };

  return { getTotalForCurrentItem, getSummaryValues };
};
