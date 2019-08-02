function pasanganTerbesar(num) {
  var arrayNum = [];
  var stringNum = String(num);
  for (var i = 0; i < stringNum.length; i++) {
    arrayNum.push([stringNum[i], stringNum[i + 1]]);
  }
  var map = arrayNum.map(function(num) {
    return num.join('');
  });
  map.sort(function(a, b) {
    return b - a;
  });
  return Number(map[0]);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
