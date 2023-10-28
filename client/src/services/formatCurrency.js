export const formatCurrency = (number) => {
  var num = number.toString();

  if (num.length <= 3) return num;

  var ans = "";

  for (var k = num.length - 1; k >= num.length - 3; k--) {
    ans += num[k];
  }

  ans += ",";

  let count = 0;
  for (var i = num.length - 4; i >= 0; i--) {
    if (count === 2) {
      count = 0;
      ans += ",";
    }

    ans += num[i];
    count++;
  }

  //reverse the string
  var ans2 = "";
  for (var j = ans.length - 1; j >= 0; j--) {
    ans2 += ans[j];
  }
  return ans2;
};
