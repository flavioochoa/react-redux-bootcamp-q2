import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIconMaterial from "@mui/icons-material/Favorite";
import { FavoriteProps } from "./FavoriteInterfaces";

export const FavoriteIcon: React.FC<FavoriteProps> = ({
  isFavorite,
  onClick,
}) => {
  const onClickHandler = () => {
    onClick(isFavorite);
  };

  return (
    <span onClick={onClickHandler}>
      {isFavorite ? <FavoriteIconMaterial /> : <FavoriteBorderIcon />}
    </span>
  );
};
