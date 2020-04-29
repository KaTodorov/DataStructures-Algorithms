function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  var max = -Infinity;
  var temp = 0;
  for (var i = 0; i < num; i++) {
    temp += arr[i];
  }
  for (var k = num; arr.length > k; k++) {
    temp = temp - arr[k - num] + arr[k];
    max = Math.max(max, temp);
    console.log(temp);
  }
  return max;
}

arr = [2, 21, 12, 1];
num = 2;

console.log(maxSubarraySum(arr, num));
