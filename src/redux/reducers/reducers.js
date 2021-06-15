export const sidebar_reducer = (state = { sidebar_expanded: true }, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        sidebar_expanded: !state.sidebar_expanded,
      };
    default:
      return state;
  }
};

export const create_mode_reducer = (state = { createMode: false }, action) => {
  switch (action.type) {
    case "CREATE_MODE_ON":
      return {
        ...state,
        createMode: true,
      };
    case "CREATE_MODE_OFF":
      return {
        ...state,
        createMode: false,
      };
    default:
      return state;
  }
};
