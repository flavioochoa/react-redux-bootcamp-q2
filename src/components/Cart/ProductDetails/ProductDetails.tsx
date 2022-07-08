import "./ProductDetails.css";

import { CardProduct } from "../CartInterfaces";
import { useGetValue } from "../../../hooks/useGetValue";

export const ProductDetails: React.FC<CardProduct> = (
  cardProduct: CardProduct
) => {
  const { getValueAt } = useGetValue();

  return (
    <div className="product-details-container">
      <div className="product-details-image-container">
        <img
          className="product-details-image"
          src={getValueAt<string>(cardProduct.images, 0)}
          alt={cardProduct.description}
        />
      </div>
      <div className="product-details-name-code">
        <span>{cardProduct.name}</span>
        <span>Product code: {cardProduct.id}</span>
      </div>
    </div>
  );
};
