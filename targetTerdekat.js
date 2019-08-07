function targetTerdekat(arr) {
  var o = []
  var x = []

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') o.push(i)
    if (arr[i] === 'x') x.push(i)
  }

  var result = []
  for (var i = 0; i < x.length; i++) {
    result.push(Math.abs(x[i] - o[0]))
  }

  var sorted = result[0]
  for (var i = 0; i < result.length; i++) {
    if (result[i] < sorted) sorted = result[i]
  }

  if (!x.length) return 0
  return sorted
}

// TEST CASES
console.log(targetTerdekat(['x', ' ', ' ', 'o', 'x', 'x', 'x'])) // 1
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])) // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])) // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])) // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])) // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])) // 2
