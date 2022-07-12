export interface RenderCellParams<T> {
  row: T;
}

export interface TableColumns<T> {
  headerName: string;
  renderCell: (params: RenderCellParams<T>) => React.ReactNode;
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
