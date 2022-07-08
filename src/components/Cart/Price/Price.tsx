import "./Price.css";

import { CardProduct } from "../CartInterfaces";
import { moneyFormatter } from "../../../utils/utils";

export const Price: React.FC<CardProduct> = (cardProduct: CardProduct) => {
  return (
    <div className="price-container">
      <span>{moneyFormatter(cardProduct.price)}</span>
    </div>
  );
};
