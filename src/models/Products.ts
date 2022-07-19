export interface Item {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  categories: string[];
  isFavorite?: boolean;
}

export interface Products {
  items: Item[];
}

export interface Category {
  id: number;
  name: string;
}

export interface Categories {
  items: Category[];
}

export interface Data {
  products: Products;
  categories: Categories;
}

export interface ProductResponse {
  items: Item[];
  maxItems: number;
  page: number;
  totalPages: number;
  numOfResults: number;
  totalRecords: number;
}

export interface UpdateFavorite {
  isFavorite: boolean;
  id: number;
}
