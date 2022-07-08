import { TableProps, WithId } from "./TableInterfaces";

import React from "react";

export const Table = <T extends WithId>({ config }: TableProps<T>) => {
  const { columns, data } = config;

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => {
            return <th key={`${column.headerName}.th`}>{column.headerName}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <tr key={`${row.id}.tr`}>
              {columns.map((item) => {
                return (
                  <td key={`${row.id}.td.${item.headerName}`}>
                    {item.renderCell(row)}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
