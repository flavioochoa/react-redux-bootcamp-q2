import "./Cart.css";

import { ORDER_COMPLETE, PRODUCTS } from "../../data/Constants";
import React, { useEffect } from "react";

import { CartSummary } from "./CartSummary/CartSummary";
import { MessageLink } from "../Common/MessageLink/MessageLink";
import { OrderStatus } from "../../models/AppState";
import { Table } from "../Common/Table/Table";
import { columns } from "./CartTableConfig";
import { useCart } from "../../hooks/useCart";
import { useHistory } from "react-router-dom";

export const Cart: React.FC = () => {
  const history = useHistory();

  const { cartState, restartCart } = useCart();

  const { items, orderStatus } = cartState;

  useEffect(() => {
    if (orderStatus === OrderStatus.Fulfilled) {
      restartCart();
      history.push(ORDER_COMPLETE);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderStatus]);

  if (!items.length) {
    return (
      <MessageLink
        message="There's no items in your cart :("
        path={PRODUCTS}
        linkLabel="Click here to add some products!"
      />
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
          <Table config={{ data: items, columns }} />

          <CartSummary cart={cartState} />
        </div>
      </div>
    </div>
  );
};
