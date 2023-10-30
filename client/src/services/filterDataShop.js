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

  return finalList;
};
