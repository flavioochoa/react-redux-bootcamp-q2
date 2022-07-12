import "./Price.css";

import { CartProduct } from "../CartInterfaces";
import { moneyFormatter } from "../../../utils/utils";

export const Price: React.FC<CartProduct> = (cartProduct: CartProduct) => {
  return (
    <div className="price-container">
      <span>{moneyFormatter(cartProduct.price)}</span>
    </div>
  );
};
