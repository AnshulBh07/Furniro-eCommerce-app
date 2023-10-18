export const formatCurrency = (number) => {
  if (number < 1000) return toString(number);

  let ans = "";
  ans += toString(number % 1000) + ",";
  number = number / 1000;

  while (number) {
    ans += toString(number % 100) + ",";
    number = number / 100;
  }

  console.log(ans);
  return ans;
};
