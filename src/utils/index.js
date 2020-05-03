export const filterList = (search, list) => {
  const result = list.filter(item => {
    return item.name === search;
  });
  return result;
};

export const redirectSearchResult = (search, history) => {
  history.push(`/catalog/?search=${search}`);
};

export const mountValueSearch = value => {
  return value.match(/\w*$/g).join('');
};
