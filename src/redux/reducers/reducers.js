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
