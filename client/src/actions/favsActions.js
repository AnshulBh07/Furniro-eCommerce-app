export const addToFav = (item) => {
  return { type: "favs/add", payload: item };
};

export const removeFromFav = (item) => {
  return { type: "favs/remove", payload: item };
};
