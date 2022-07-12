import { MessageLink } from "../Common/MessageLink/MessageLink";
import { PRODUCTS } from "../../data/Constants";
import React from "react";

export const OrderFullfilled: React.FC = () => {
  return (
    <MessageLink
      message="Order created successfully!"
      path={PRODUCTS}
      linkLabel="Click here to keep shoping!"
    />
  );
};
