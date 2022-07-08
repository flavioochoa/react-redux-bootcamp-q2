import { CardProduct } from "./CartInterfaces";
import { Price } from "./Price/Price";
import { ProductDetails } from "./ProductDetails/ProductDetails";
import { Quantity } from "./Quantity/Quantity";
import { TableColumns } from "../Common/Table/TableInterfaces";
import { Total } from "./Total/Total";

export const columns: Array<TableColumns<CardProduct>> = [
  {
    headerName: "Product Details",
    renderCell: (row: CardProduct) => {
      return <ProductDetails {...row} />;
    },
  },
  {
    headerName: "Quantity",
    renderCell: (row: CardProduct) => {
      return <Quantity {...row} />;
    },
  },
  {
    headerName: "Price",
    renderCell: (row: CardProduct) => {
      return <Price {...row} />;
    },
  },
  {
    headerName: "Total",
    renderCell: (row: CardProduct) => {
      return <Total {...row} />;
    },
  },
];
