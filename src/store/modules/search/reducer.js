export default function search(state = '', action) {
  switch (action.type) {
    case 'MOUNT_TO_SEARCH':
      return action.value;
    default:
      return state;
  }
}
