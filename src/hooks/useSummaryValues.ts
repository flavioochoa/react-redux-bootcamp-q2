import {
  CardProduct,
  CardProducts,
  SummaryValues,
} from "../components/Cart/CartInterfaces";

export const useSummaryValues = () => {
  const getTotalForCurrentItem = (currentValue: CardProduct) => {
    const { quantity, price } = currentValue;
    const totalForCurrentItem = quantity * price;

    return { quantity, price, totalForCurrentItem };
  };

  const getSummaryValues = (selectedProducts: CardProducts) => {
    const initialSummaryValues: SummaryValues = {
      totalItems: 0,
      total: 0,
    };

    const summary = selectedProducts.items.reduce(
      (previousValue, currentValue) => {
        const { quantity, totalForCurrentItem } =
          getTotalForCurrentItem(currentValue);
        const totalItems = previousValue.totalItems + quantity;
        const total = previousValue.total + totalForCurrentItem;
        return { totalItems, total };
      },
      initialSummaryValues
    );

    return summary;
  };

  return { getTotalForCurrentItem, getSummaryValues };
};
