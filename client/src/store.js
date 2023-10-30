import { cartReducer } from "./reducers/cartReducer";
import { configureStore } from "@reduxjs/toolkit";
import { favReducer } from "./reducers/favouritesReduces";
import { headerReducer } from "./reducers/headerReducer";

export const store = configureStore({
  // this will be our root reducer that holds all other reducers
  reducer: {
    cart: cartReducer,
    favourites: favReducer,
    header: headerReducer,
  },
});
