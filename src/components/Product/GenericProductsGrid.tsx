import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Item } from "../../models/Products";
import { ProductContainer } from "../Product/ProductContainer";
import React from "react";

export const GenericProductsGrid: React.FC<{ data: Array<Item> }> = ({
  data,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }} className="product-grid-container">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 4, md: 8, lg: 10 }}
      >
        {data.map((product, index) => {
          return (
            <Grid item xs={2} sm={2} md={2} key={index}>
              <ProductContainer product={product} key={product.id} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
