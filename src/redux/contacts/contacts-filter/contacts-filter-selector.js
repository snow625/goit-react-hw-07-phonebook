export const getFilteredItems = ({ contacts: { filter, items } }) => {
  if (!filter) {
    return items;
  }
  const newItems = items.filter((e) => {
    const { name } = e;
    return name.toLowerCase().includes(filter.toLowerCase());
  });
  return newItems;
};
