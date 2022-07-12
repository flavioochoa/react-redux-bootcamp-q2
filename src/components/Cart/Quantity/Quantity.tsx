import "./Quantity.css";

import { Button } from "../../Common/Button/Button";
import { CartProduct } from "../CartInterfaces";
import { useCart } from "../../../hooks/useCart";

export const Quantity: React.FC<CartProduct> = (cartProduct: CartProduct) => {
  const { changeProductQuantity, removeFromCart } = useCart();

  const { id, quantity } = cartProduct;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(e.target.value);
    changeProductQuantity({ quantity, id });
  };

  const remove = () => {
    removeFromCart(cartProduct.id);
  };

  return (
    <div className="product-quantity-container">
      <input
        value={isNaN(quantity) ? "" : quantity}
        onChange={onChange}
        type="number"
        min="1"
      />
      <Button label="Remove" onClick={remove} color="error" />
    </div>
  );
};
