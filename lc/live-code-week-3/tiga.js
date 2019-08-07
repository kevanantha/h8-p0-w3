var height = 5;

var j = 1;
for (var i = 1; i <= height; i++) {
  var result = '';
  for (j; j <= height; j++) {
    result += j;
  }
  j = i + 1;
  console.log(result);
}
