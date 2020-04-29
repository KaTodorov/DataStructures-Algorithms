function sum(arr) {
  left = 0;
  right = 1;

  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      right++;
    } else {
      left++;
      arr[left] = arr[right];
    }
  }
  return left + 1;
}

arr = [1, 2, 2, 5, 5, 6, 6, 6, 7, 7, 11, 17, 21, 21];

console.log(sum(arr));
