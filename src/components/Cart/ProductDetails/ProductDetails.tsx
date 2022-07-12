import "./ProductDetails.css";

import { CartProduct } from "../CartInterfaces";
import { useGetValue } from "../../../hooks/useGetValue";

export const ProductDetails: React.FC<CartProduct> = (
  cartProduct: CartProduct
) => {
  const { getValueAt } = useGetValue();

  return (
    <div className="product-details-container">
      <div className="product-details-image-container">
        <img
          className="product-details-image"
          src={getValueAt<string>(cartProduct.images, 0)}
          alt={cartProduct.description}
        />
      </div>
      <div className="product-details-name-code">
        <span>{cartProduct.name}</span>
        <span>Product code: {cartProduct.id}</span>
      </div>
    </div>
  );
};
