export default function list(
  state = {
    typeId: '',
    theme: '',
  },
  action
) {
  switch (action.type) {
    case 'MOUNT_TO_THEME':
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
}
