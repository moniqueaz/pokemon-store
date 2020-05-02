export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const result = state.every(item => {
        return item.id !== action.item.id;
      });
      const newState = result ? [...state, action.item] : [...state];
      localStorage.setItem(
        `list-${action.theme.mode}`,
        JSON.stringify(newState)
      );
      return [...newState];
    case 'REMOVE_TO_CART':
      const newCartDelete = state.filter(item => {
        return item.id !== action.id;
      });
      localStorage.setItem(
        `list-${action.theme.mode}`,
        JSON.stringify([...newCartDelete])
      );
      return [...newCartDelete];
    case 'DELETE_CART':
      localStorage.setItem(`list-${action.theme.mode}`, JSON.stringify([]));
      return [];
    default:
      return state;
  }
}
