import "./Total.css";

import { CartProduct } from "../CartInterfaces";
import { moneyFormatter } from "../../../utils/utils";
import { useSummaryValues } from "../../../hooks/useSummaryValues";

export const Total: React.FC<CartProduct> = (cartProduct: CartProduct) => {
  const { getTotalForCurrentItem } = useSummaryValues();

  const { totalForCurrentItem } = getTotalForCurrentItem(cartProduct);

  return (
    <div className="product-total-container">
      <span>{moneyFormatter(totalForCurrentItem)}</span>
    </div>
  );
};
