export default (state = 'show_all', action) => {
  switch (action.type) {
    case 'show_all': {
      return 'show_all';
    }
    case 'show_completed': {
      return 'show_completed';
    }
    case 'show_pending': {
      return 'show_pending';
    }

    default:
      return state;
  }
};
