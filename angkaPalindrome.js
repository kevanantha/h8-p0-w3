function angkaPalindrome(num) {
  if (!num) return;

  var isPalindrome = false;

  while (!isPalindrome) {
    num++;
    var anotherNum = String(num)
      .split('')
      .reverse()
      .join('');

    if (num == anotherNum) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
    }
  }
  return num;
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
