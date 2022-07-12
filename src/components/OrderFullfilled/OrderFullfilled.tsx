import { Links } from "../../styles/components/Header.styles";
import { PRODUCTS } from "../../data/Constants";
import React from "react";

export const OrderFullfilled: React.FC = () => {
  return (
    <div className="cart-center cart-fulfilled">
      <span>Order created successfully!</span>
      <Links to={PRODUCTS}>Click here to keep shoping</Links>
    </div>
  );
};
