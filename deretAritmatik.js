function tentukanDeretAritmatika(arr) {
  var isAritmatik = true;
  var difference = Math.abs(arr[0] - arr[1]);
  difference;

  for (var i = 0; i < arr.length - 1 && isAritmatik; i++) {
    if (difference !== Math.abs(arr[i] - arr[i + 1])) {
      isAritmatik = false;
    }
  }
  return isAritmatik;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
