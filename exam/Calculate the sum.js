function sumOfArray() {
  const myArray = [1, 2, 3, 4, 5, 6]
  let sum = 0

  for (let a = 0; a < myArray.length; a++) {
    sum += myArray[a]
  }

  return sum
}

console.log('Sum of given array values = ' + sumOfArray([1, 2, 3, 4, 5, 6]))
