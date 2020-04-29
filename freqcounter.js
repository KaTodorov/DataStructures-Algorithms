function anagrams(arr1, arr2) {
  obj1 = {};
  obj2 = {};

  for (var i = 0; arr1.length > i; i++) {
    var char = arr1[i];
    if (obj1[char] > 0) {
      obj1[char]++;
    } else {
      obj1[char] = 1;
    }
  }
  for (var k = 0; arr2.length > k; k++) {
    var char2 = arr2[k];
    if (obj2[char2] > 0) {
      obj2[char2]++;
    } else {
      obj2[char2] = 1;
    }
  }
  console.log(obj1);
  console.log(obj2);
  for (var key in obj1) {
    if (!(key in obj2)) {
      return false;
    }
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
var arr1 = 'haaahahah';
var arr2 = 'aaahhhh';

console.log(anagrams(arr1, arr2));
