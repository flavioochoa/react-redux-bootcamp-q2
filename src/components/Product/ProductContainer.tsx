import "./Product.css";

import { Button } from "../Common/Button/Button";
import { Paper } from "@mui/material";
import { Product } from "./Product";
import { ProductProps } from "./ProductInterfaces";
import React from "react";

export const ProductContainer: React.FC<ProductProps> = (
  props: ProductProps
) => {
  const { product } = props;

  const addToCart = () => {
    // TODO: add dispatch to save it in store
    console.log(product);
    alert("In progress add to cart");
  };

  return (
    <Paper elevation={6} key={product.id}>
      <Product product={product} />
      <div className="add-to-cart-button-container">
        <Button
          className="add-to-cart-button"
          label="Add to Cart"
          onClick={addToCart}
        />
      </div>
    </Paper>
  );
};
