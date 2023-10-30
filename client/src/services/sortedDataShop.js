function sortPriceAscending(data) {
  data.sort((a, b) => {
    return a.discounted_price - b.discounted_price;
  });
  return data;
}

function sortPriceDescending(data) {
  data.sort((a, b) => {
    return b.discounted_price - a.discounted_price;
  });
  return data;
}

function sortByDiscount(data) {
  data.sort((a, b) => {
    return b.discount_value - a.discount_value;
  });
  return data;
}

function sortByNewest(data) {
  data.sort((a, b) => {
    return b.date - a.date;
  });
  return data;
}

export const sortData = (data, sort_type) => {
  switch (sort_type) {
    case "Recommended":
      return data;
    case "low-high":
      return sortPriceAscending(data);
    case "high-low":
      return sortPriceDescending(data);
    case "new":
      return sortByNewest(data);
    case "discount":
      return sortByDiscount(data);
    default:
      return data;
  }
};
