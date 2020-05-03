export const filterList = (search, list) => {
  const result = list.filter(item => {
    return item.name === search;
  });
  return result;
};

export const redirectSearchResult = (search, history) => {
  if (search) {
    history.push(`/search/?search=${search}`);
  }
};
