export function addToCart(item, theme) {
  return {
    type: 'ADD_TO_CART',
    item,
    theme,
  };
}

export function removeToCart(id, theme) {
  return {
    type: 'REMOVE_TO_CART',
    id,
    theme,
  };
}

export function deleteCart(theme) {
  return {
    type: 'DELETE_TO_CART',
    theme,
  };
}
