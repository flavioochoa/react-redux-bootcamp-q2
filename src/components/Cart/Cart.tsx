import "./Cart.css";

import { Button } from "../Common/Button/Button";
import { CartSummary } from "./CartSummary/CartSummary";
import React from "react";
import { Table } from "../Common/Table/Table";
import { columns } from "./CartTableConfig";
import { useCart } from "../../hooks/useCart";

export const Cart: React.FC = () => {
  const { cart, getRandomProducts } = useCart();

  if (!cart.items.length) {
    return (
      <div className="cart-no-items">
        <span>There's no items in your cart :(</span>
        <Button label="Add random products" onClick={getRandomProducts} />
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div>
        <div className="cart-title">
          <h3>Shopping Cart</h3>
        </div>
        <hr />
        <div className="cart-products-summary-container">
          <Table config={{ data: cart.items, columns }} />

          <CartSummary cart={cart} />
        </div>
      </div>
    </div>
  );
};
