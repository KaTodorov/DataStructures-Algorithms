function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var k = 0; k < i - 1; k++) {
      if (arr[k] > arr[k + 1]) {
        var temp = arr[k];
        arr[k] = arr[k + 1];
        arr[k + 1] = temp;
      }
    }
  }
  return arr;
}

//   console.log(bubbleSort([3, -2, 1, 65, 32, 33, 6]));
function selectionSort(arr = [5, 2, 1, 31, 54, -3]) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var k = i + 1; k < arr.length; k++) {
      if (arr[k] < arr[lowest]) {
        lowest = k;
      }
    }
    if (i !== lowest) {
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

// console.log(selectionSort());

function insertionSort(arr = [4, 3, 1, 2]) {
  for (var i = 1; i < arr.length; i++) {
    var item = arr[i];
    for (var k = i - 1; k >= 0 && item < arr[k]; k--) {
      arr[k + 1] = arr[k];
    }
    console.log(k);
    arr[k + 1] = item;
  }
  return arr;
}

console.log(insertionSort());
