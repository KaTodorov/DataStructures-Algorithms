
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
