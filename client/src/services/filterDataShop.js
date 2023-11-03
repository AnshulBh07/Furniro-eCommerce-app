export const filterData = (data, filters) => {
  // perform filters one by one if they exist
  let finalList = data;

  if (filters.category) {
    if (filters.category === "Any") finalList = finalList;
    else
      finalList = finalList.filter((item) => {
        return item.category.toLowerCase() === filters.category.toLowerCase();
      });
  }

  if (filters.room_type) {
    if (filters.room_type === "Any") finalList = finalList;
    else
      finalList = finalList.filter((item) => {
        return item.room_type.toLowerCase() === filters.room_type.toLowerCase();
      });
  }

  if (filters.brand_name) {
    if (filters.brand_name === "Any") finalList = finalList;
    else
      finalList = finalList.filter((item) => {
        return (
          item.brand_name.toLowerCase() === filters.brand_name.toLowerCase()
        );
      });
  }

  if (filters.min_price && filters.max_price) {
    finalList = finalList.filter((item) => {
      const real_price = Math.round(
        item.price - (item.discount_value / 100) * item.price
      );

      return (
        real_price >= Number(filters.min_price) &&
        real_price <= Number(filters.max_price)
      );
    });
  }

  return finalList;
};
