function tentukanDeretGeometri(arr) {
  var isGeometri = true;
  var difference = arr[1] / arr[0];

  for (var i = 0; i < arr.length - 1 && isGeometri; i++) {
    if (difference !== arr[i + 1] / arr[i]) {
      isGeometri = false;
    }
  }
  return isGeometri;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
