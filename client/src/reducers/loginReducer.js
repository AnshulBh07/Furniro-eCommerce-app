const value = JSON.parse(localStorage.getItem("login-state"));

const initialState =
  value !== null
    ? value
    : { isLoggedIn: false, fName: "", lName: "", email: "", user_id: "" };

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "login/toggle":
      return { ...state, isLoggedIn: !state.isLoggedIn };
    case "login/setBasicInfo":
      return {
        ...state,
        fName: action.payload.first_name,
        lName: action.payload.last_name,
        email: action.payload.email,
        user_id: action.payload.user_id,
      };
    case "login/removeInfo":
      return { ...state, fName: "", lName: "", email: "", user_id: "" };
    default:
      return state;
  }
};
