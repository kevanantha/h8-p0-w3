function pasanganTerbesar(num) {
  const arrNum = []
  const stringNum = String(num)
  const splitNum = []
  let largestNum = 0

  for (let i = 0; i < stringNum.length - 1; i++) {
    let temp = ''
    temp += stringNum[i] + stringNum[i + 1]
    splitNum.push(temp)
  }

  for (let i = 0; i < splitNum.length; i++) {
    arrNum.push(Number(splitNum[i]))
  }

  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > largestNum) largestNum = arrNum[i]
  }

  return largestNum
}

// TEST CASES
console.log(pasanganTerbesar(641573)) // 73
console.log(pasanganTerbesar(12783456)) // 83
console.log(pasanganTerbesar(910233)) // 91
console.log(pasanganTerbesar(71856421)) // 85
console.log(pasanganTerbesar(79918293)) // 99
