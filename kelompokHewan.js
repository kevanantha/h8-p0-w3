function groupAnimals(animals) {
  animals.sort();
  var firstAlphabet = animals[0][0];
  var tempArray = [];
  var result = [];

  for (var i = 0; i < animals.length; i++) {
    if (animals[i][0] === firstAlphabet) {
      tempArray.push(animals[i]);
    } else {
      result.push(tempArray);
      tempArray = [];
      firstAlphabet = animals[i][0];
      tempArray.push(animals[i]);
    }
    if (i === animals.length - 1) {
      result.push(tempArray);
    }
  }
  return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
