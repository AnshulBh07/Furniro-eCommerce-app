const initialState = {
  showEditDetails: false,
  showAddressEditor: false,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "profile/edit_details":
      return { ...state, showEditDetails: !state.showEditDetails };
    case "profile/add_address":
      return { ...state, showAddressEditor: !state.showAddressEditor };
    default:
      return state;
  }
};
