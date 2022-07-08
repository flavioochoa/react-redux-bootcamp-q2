import "./Cart.css";

import React, { useEffect } from "react";

import { CartSummary } from "./CartSummary/CartSummary";
import { Table } from "../Common/Table/Table";
import { columns } from "./CartTableConfig";
import { useCart } from "../../hooks/useCart";

export const Cart: React.FC = () => {
  const { selectedProducts, getRandomProducts } = useCart();

  useEffect(() => {
    getRandomProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!selectedProducts.items.length) {
    return <>There's no items in your cart :(</>;
  }

  return (
    <div className="cart-container">
      <div>
        <div className="cart-title">
          <h3>Shopping Cart</h3>
        </div>
        <hr />
        <div className="cart-products-summary-container">
          <Table config={{ data: selectedProducts.items, columns }} />

          <CartSummary selectedProducts={selectedProducts} />
        </div>
      </div>
    </div>
  );
};
