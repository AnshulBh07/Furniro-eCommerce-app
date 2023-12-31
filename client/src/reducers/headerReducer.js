const val = JSON.parse(localStorage.getItem("show_header_footer"));

const initialState = {
  showCart: false,
  favourites: false,
  search: "",
  searchClick: false,
  showProfile: false,
  showHeaderFooter: val !== null ? val : true, //check whether this state is undefined or not
};

export const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "header/setSearch":
      return { ...state, search: action.payload };
    case "header/searchClick":
      return { ...state, searchClick: !state.searchClick };
    case "header/showCart":
      return { ...state, showCart: !state.showCart };
    case "header/setFav":
      return { ...state, favourites: !state.favourites };
    case "header/showProfileSubmenu":
      return { ...state, showProfile: !state.showProfile };
    case "header/show":
      return { ...state, showHeaderFooter: !state.showHeaderFooter };
    default:
      return state;
  }
};
