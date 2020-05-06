export const filterListWithName = (search, list) => {
  const regex = RegExp(`${search}`, 'ig');
  const result = list.filter(item => {
    return item.name.match(regex);
  });
  return result;
};

export const findItemByProductId = (id, list) => {
  const result = list.find(item => {
    return item.productId === id;
  });
  return result;
};

export const redirectSearchResult = (search, history) => {
  history.push(`/catalog/?search=${search}`);
};

export const mountValueSearch = value => {
  return value.match(/\w*$/g).join('');
};
