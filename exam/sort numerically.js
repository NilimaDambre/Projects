const numbers = [12, 15, 2, 0, -100, 1000, 98, 67, 1012]
numbers.sort()
console.log('Alphabatically sorted numbers:', numbers)

numbers.sort(function (a, b) {
  return a - b
})
console.log('Numrically sorted numbers:', numbers)
