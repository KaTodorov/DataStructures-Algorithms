function power(num, pow) {
  if (pow === 0) {
    return 1;
  }
  if (pow === 1) {
    return num;
  }
  return num * power(num, pow - 1);
}
function factorial(num) {
  if (num < 0) {
    return 0;
  }
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

// pow = 2;
// num = 2;
// console.log(power(num, pow));
function productofArray(arr) {
  var sum = 0;

  function add(arr_help) {
    if (arr_help.length === 0) {
      return;
    }
    sum += arr_help[0];
    return add(arr_help.slice(1));
  }
  add(arr);
  return sum;
}

arr = [2, 1, 30, 3, 1];

console.log(productofArray(arr));
// num = 1;
// console.log(factorial(num));
