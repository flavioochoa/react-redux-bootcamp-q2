export const moneyFormatter = (value: number, format?: string): string => {
  const formatter = Intl.NumberFormat(format);
  return `$${formatter.format(value)}`;
};

export function findIndexById<T extends { id: number | string }>(
  items: Array<T>,
  id: number | string
) {
  const index = items.findIndex((item) => {
    return item.id === id;
  });

  return index;
}
