// Usage: getRandomInt(6)
// Outputs a random number between 1 and 6
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: Simulate the rolling of two six-sided dice

// Write the recipe (algorithm) in the comments. Write the code.
let die1 = getRandomInt(6)
console.log(`the first die is ${die1}`)

let die2 = getRandomInt(6)
console.log(`the second die is ${die2}`)

let total = die1 + die2
console.log(`The total is ${total}`)

// Store the value of the first die in memory. Write it out to the console in a human-readable format.

// Store the value of the second die in memory. Write it out to the console in a human-readable format.

// Store the value of the total of the two dice in memory. Write it out to the console in a human-readable format.