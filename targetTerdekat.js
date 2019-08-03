function targetTerdekat(arr) {
  var o = [];
  var x = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') o.push(i);
    if (arr[i] === 'x') x.push(i);
  }

  if (!x.length) return 0;
  if (x[0] > o[0]) {
    return Math.abs(o[o.length - 1] - x[0]);
  } else {
    return Math.abs(x[x.length - 1] - o[0]);
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
