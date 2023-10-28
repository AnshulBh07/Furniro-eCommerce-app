// derive from local storage if it exists to persist fav data
const stateVal = JSON.parse(localStorage.getItem("favList"));

const initialState = stateVal ? stateVal : { favs: [] };

export const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case "favs/add":
      return { ...state, favs: [...state.favs, action.payload] };
    case "favs/remove":
      return {
        ...state,
        favs: state.favs.filter((item) => {
          return item !== action.payload;
        }),
      };
    default:
      return state;
  }
};
