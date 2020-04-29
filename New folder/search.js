function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}
arr = [23, 12, 1, 231, 2];
val = 3;
console.log(linearSearch(arr, val));
arr = [1, 2, 3, 4, 5, 7, 11, 13];
console.log(binarySearch(arr, 6));

function binarySearch(arr, el) {
  var left = 0;
  var right = arr.length - 1;
  while (left <= right) {
    var mid = Math.round(left + (right - left) / 2);
    console.log(left);
    console.log(right);
    if (el === arr[mid]) return mid;
    if (el > arr[mid]) left = mid + 1;
    else right = mid - 1;
  }
  return false;
}
