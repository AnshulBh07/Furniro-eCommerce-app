export function addToCart(item) {
  // return the action that usually appears in dispatch
  return { type: "cart/add", payload: item };
}

export function removeFromCart(item) {
  return { type: "cart/remove", payload: item };
}

export function increaseQuantity(item) {
  return { type: "cart/increase_quantity", payload: item };
}

export function decreaseQuantity(item) {
  return { type: "cart/decrease_quantity", payload: item };
}
