import { GenericProductsGrid } from "./GenericProductsGrid";
import { MessageLink } from "../Common/MessageLink/MessageLink";
import { PRODUCTS } from "../../data/Constants";
import React from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { findProductById } = useProducts();

  const product = findProductById(parseInt(id));

  if (!product) {
    return (
      <MessageLink
        message="Product not found :("
        path={PRODUCTS}
        linkLabel="Click here to go to products!"
      />
    );
  }

  return <GenericProductsGrid data={[product]} />;
};
