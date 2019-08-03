function translate(str, to) {
  // your code here
  var temp = '';
  for (var i = 0; i < str.length; i++) {
    if (str[i] === '#') {
      temp = temp + str[i].replace(str[i], to);
    } else {
      temp = temp + str[i];
    }
  }
  return temp;
}

console.log(translate('aku#ingin#makan', ' '));
