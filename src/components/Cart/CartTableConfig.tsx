import {
  RenderCellParams,
  TableColumns,
} from "../Common/Table/TableInterfaces";

import { CartProduct } from "./CartInterfaces";
import { Price } from "./Price/Price";
import { ProductDetails } from "./ProductDetails/ProductDetails";
import { Quantity } from "./Quantity/Quantity";
import { Total } from "./Total/Total";

export const columns: Array<TableColumns<CartProduct>> = [
  {
    headerName: "Product Details",
    renderCell: ({ row }: RenderCellParams<CartProduct>) => {
      return <ProductDetails {...row} />;
    },
  },
  {
    headerName: "Quantity",
    renderCell: ({ row }: RenderCellParams<CartProduct>) => {
      return <Quantity {...row} />;
    },
  },
  {
    headerName: "Price",
    renderCell: ({ row }: RenderCellParams<CartProduct>) => {
      return <Price {...row} />;
    },
  },
  {
    headerName: "Total",
    renderCell: ({ row }: RenderCellParams<CartProduct>) => {
      return <Total {...row} />;
    },
  },
];
