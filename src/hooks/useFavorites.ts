import { Item } from "../models/Products";
import { updateFavorite } from "../stores/features/ProductSlice";
import { useAppState } from "./useAppState";

export const useFavorites = () => {
  const { productsState, dispatch } = useAppState();

  const { products } = productsState;

  const favorites =
    products?.items.filter((product) => product.isFavorite === true) || [];

  const hasFavorites = Boolean(favorites.length);

  const favoriteHandler = (isFavorite: boolean, item: Item) => {
    const { id } = item;
    dispatch(updateFavorite({ isFavorite: !isFavorite, id }));
  };

  return { favorites, hasFavorites, favoriteHandler };
};
