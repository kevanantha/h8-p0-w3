function palindrome(kata) {
  var anotherKata = kata
    .split('')
    .reverse()
    .join('');
  return kata === anotherKata ? true : false;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
