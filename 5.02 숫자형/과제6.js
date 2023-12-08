// Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

// Any number from the interval min..max must appear with the same probability.
const randomInteger = (min, max) => {
  return min+ ~~(Math.random()*(max-min))
}
console.log(randomInteger(1,5));
console.log(randomInteger(1,5));
console.log(randomInteger(1,5));