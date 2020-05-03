export function initToCart(cart) {
  return {
    type: 'INIT_TO_CART',
    cart,
  };
}
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
    type: 'DELETE_CART',
    theme,
  };
}

export function mountToSearch(value) {
  return {
    type: 'MOUNT_TO_SEARCH',
    value,
  };
}
