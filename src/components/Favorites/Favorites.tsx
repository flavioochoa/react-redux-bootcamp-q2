import { GenericProductsGrid } from "../Product/GenericProductsGrid";
import { MessageLink } from "../Common/MessageLink/MessageLink";
import { PRODUCTS } from "../../data/Constants";
import React from "react";
import { useFavorites } from "../../hooks/useFavorites";

export const Favorites: React.FC = () => {
  const { hasFavorites, favorites } = useFavorites();

  if (!hasFavorites) {
    return (
      <MessageLink
        message="There's no favorites :("
        path={PRODUCTS}
        linkLabel="Click here to add some favorites!"
      />
    );
  }

  return <GenericProductsGrid data={favorites} />;
};
