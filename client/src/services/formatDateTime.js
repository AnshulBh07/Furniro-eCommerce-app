export const formatDateTime = (input_date) => {
  const date_arr1 = input_date.split("T");
  const date_arr2 = date_arr1[0].split("-");

  var finalDate = "";
  date_arr2.reverse();

  date_arr2.forEach((element) => {
    finalDate += element + "-";
  });

  finalDate = finalDate.slice(0, finalDate.length - 1);
  return finalDate;
};
