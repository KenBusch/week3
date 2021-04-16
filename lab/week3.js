// Usage: getRandomInt(6)
// Outputs a random number between 1 and max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: Read the "Musicessories" database into memory; write information
// about products and promotions to the JavaScript Console.
// - PART 1: Write out the number of products/promotions in the database, in a human-readable
//   format, to the JavaScript console, e.g. "There are x products."
// - PART 2: Write the name, description, and price of the first 3 products to the JavaScript
//   console – the name, description, and price should each be on its own line, and the
//   price should be formatted like "$5.49 each".
// - PART 3: Get a random promotion from the list of promotions. Display the description of the
//   promotion, along with the appropriate emoji.
//   - Discount = 🤑
//   - Shipping = 🚛
//   - Contest = 🏆

// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from products API endpoint
  let response = await fetch('https://kiei451.com/api/products.json')
  let data = await response.json()

  // writes the product data to the JavaScript console
  console.log(data)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.

  // PART 1
  // Figure out how products there are, and store that number in memory

  // Figure out how promotions there are, and store that number in memory

  // Write the number of products to the JavaScript console
  console.log(`there are ${data.products.length} products`)
  // Write the number of promotions to the JavaScript console
  console.log(`there are ${data.promotions.length} promotions`)
  // PART 2
  // Store the first product in memory
  let product1 = data.products[0]

  // Write the first product to the JavaScript console, on three separate lines
console.log(product1.name)
console.log(product1.price)
console.log(product1.description)
  // Repeat for the 2nd and 3rd products
  // Store the second product in memory
  let product2 = data.products[1]
  let product3 = data.products[2]
  // Write the product to the JavaScript console, on three separate lines
console.log(product2.name)
console.log(product2.price)
console.log(product2.description)
  // Store the third product in memory
  console.log(product3.name)
  console.log(product3.price)
  console.log(product3.description)
  // Write the product to the JavaScript console, on three separate lines

  // PART 3
  // Get a random integer between 1 and 10
let randomNumber = getRandomInt (10)
  // Subtract one from that random integer because Arrays are zero-based
randomNumber = randomNumber-1

  // Use the random integer to grab a promotion from the Array of promotions
  // and store it in memory
  
  let randomPromo = data.promotions[randomNumber]

  console.log(randomPromo)
  // Figure out which emoji should be displayed, store it in memory (you will need

  let emoji

  if (randomPromo.type == `discount`) {
    emoji = `🤑`
  } else if (randomPromo.type == `shipping`) {
    emoji = `🚛`
  } else {
    emoji = `🏆`
  }
  console.log (`Your promo is ${randomPromo.description} ${emoji}`)
  // an empty variable for this before you write any conditional)

  // Create a sentence that displays the emoji along with the description 
  // of the promotion

  // Write the sentence to the JavaScript console

  // 🔥 YOUR CODE ENDS HERE 🔥
})
