const allNumbers = [
  10,
  -20,
  25,
  -13,
  12,
  -15,
  17,
  28,
  -35,
  -45,
  -47,
  57,
  89,
  50,
]
console.log('Numbers of an array are:', allNumbers)

const negativeNumbers = allNumbers.filter(function (a) {
  return a < 0
})
console.log('The negative numbers of an array are:', negativeNumbers)

const positiveNumbers = allNumbers.filter(function (a) {
  return a > 0
})
console.log('The positive numbers of an array are:', positiveNumbers)
