import "./Total.css";

import { CardProduct } from "../CartInterfaces";
import { moneyFormatter } from "../../../utils/utils";
import { useSummaryValues } from "../../../hooks/useSummaryValues";

export const Total: React.FC<CardProduct> = (cardProduct: CardProduct) => {
  const { getTotalForCurrentItem } = useSummaryValues();

  const { totalForCurrentItem } = getTotalForCurrentItem(cardProduct);

  return (
    <div className="product-total-container">
      <span>{moneyFormatter(totalForCurrentItem)}</span>
    </div>
  );
};
