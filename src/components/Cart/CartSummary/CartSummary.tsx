import "./CartSummary.css";

import { Button } from "../../Common/Button/Button";
import { CartSummaryProps } from "../CartInterfaces";
import React from "react";
import { moneyFormatter } from "../../../utils/utils";
import { useCart } from "../../../hooks/useCart";

export const CartSummary: React.FC<CartSummaryProps> = ({
  selectedProducts,
}) => {
  const { getSummaryValues, checkout } = useCart();

  const { totalItems, total } = getSummaryValues(selectedProducts);

  return (
    <div>
      <div className="cart-summary">
        <div className="cart-summary-title">Summary</div>

        <hr />

        <div className="cart-summary-number-of-items">Items {totalItems}</div>

        <hr />

        <div className="cart-summary-total">
          <span>Total Cost</span>
          <span>{moneyFormatter(total)}</span>
        </div>

        <div className="cart-summary-checkout">
          <Button label="Checkout" onClick={checkout} />
        </div>
      </div>
    </div>
  );
};
