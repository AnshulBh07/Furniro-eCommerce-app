import { cartReducer } from "./reducers/cartReducer";
import { configureStore } from "@reduxjs/toolkit";
import { favReducer } from "./reducers/favouritesReduces";
import { headerReducer } from "./reducers/headerReducer";
import { loginReducer } from "./reducers/loginReducer";
import { profileReducer } from "./reducers/profileReducer";

export const store = configureStore({
  // this will be our root reducer that holds all other reducers
  reducer: {
    cart: cartReducer,
    favourites: favReducer,
    header: headerReducer,
    login: loginReducer,
    profile: profileReducer,
  },
});
