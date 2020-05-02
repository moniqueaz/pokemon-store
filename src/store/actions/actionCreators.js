export function addToCart(item, theme) {
  return {
    type: 'ADD_TO_CART',
    item,
    theme,
  };
}

export function removeToCart(item) {
  return {
    type: 'REMOVE_TO_CART',
    item,
  };
}

export function deleteCart() {
  return {
    type: 'DELETE_TO_CART',
  };
}
