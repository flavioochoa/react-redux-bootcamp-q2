import { GenericProductsGrid } from "./GenericProductsGrid";
import { Loading } from "../Common/Loading/Loading";
import React from "react";
import { useProductsWithEffects } from "../../hooks/useProductsWithEffects";

export const ProductsGrid: React.FC = () => {
  const { products, loading } = useProductsWithEffects();

  if (loading || !products) {
    return <Loading isLoading />;
  }

  const { items } = products;

  return <GenericProductsGrid data={items} />;
};
