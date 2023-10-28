const val = JSON.parse(localStorage.getItem("cart"));

// if data exists in local storage use that else declare a new one
const initialState = val ? val : { cartItems: [], cartTotal: 0 };

// this is very similar to context API, a store will store multiple reducers and each reducer returns
// a state, her eit will be our gloabl state for cart
// if u want to mutate the values in dispatch or reducer nenver do directly like a= b+c, instead
// use map function as it returns a mutated array as a whole
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "cart/add":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        cartTotal:
          state.cartTotal + action.payload.qty * action.payload.discounted,
      };

    case "cart/remove":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          return item.sku !== action.payload.sku;
        }),
        cartTotal:
          state.cartTotal - action.payload.qty * action.payload.discounted,
      };

    case "cart/increase_quantity":
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.sku === action.payload.sku)
            return {
              ...item,
              qty: item.qty + 1,
            };
          else return item;
        }),
        cartTotal: state.cartTotal + action.payload.discounted,
      };
    case "cart/decrease_quantity":
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.sku === action.payload.sku)
            return {
              ...item,
              qty: item.qty - 1,
            };
          else return item;
        }),
        cartTotal: state.cartTotal - action.payload.discounted,
      };
    default:
      return state;
  }
};
