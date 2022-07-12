import "./Product.css";

import { Button } from "../Common/Button/Button";
import { Paper } from "@mui/material";
import { Product } from "./Product";
import { ProductProps } from "./ProductInterfaces";
import React from "react";
import { useCart } from "../../hooks/useCart";

export const ProductContainer: React.FC<ProductProps> = (
  props: ProductProps
) => {
  const { product } = props;

  const { addToCart } = useCart();

  return (
    <Paper elevation={6} key={product.id}>
      <div className="product-grid-container">
        <Product product={product} />
      </div>
      <div className="add-to-cart-button-container">
        <Button label="Add to Cart" onClick={() => addToCart(product)} />
      </div>
    </Paper>
  );
};
