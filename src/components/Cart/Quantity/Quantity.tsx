import "./Quantity.css";

import { CardProduct } from "../CartInterfaces";

export const Quantity: React.FC<CardProduct> = (cardProduct: CardProduct) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //TODO: dispatch action to update cuantity
    console.log(e.target.value);
  };

  return (
    <div className="product-quantity-container">
      <input value={cardProduct.quantity} onChange={onChange} type="number" />
    </div>
  );
};
