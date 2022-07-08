export interface TableColumns<T> {
  headerName: string;
  renderCell: (row: T) => React.ReactNode;
}

export interface WithId {
  id: number;
}

export interface TableProps<T> {
  config: {
    data: Array<T>;
    columns: Array<TableColumns<T>>;
  };
}
