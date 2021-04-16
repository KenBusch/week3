// Goal: Store my social media profile in memory. Display it in the 
// JavaScript console in Chrome, in a human-readable format.

// A social media profile is a more complex thing – it's not simply
// a String or a Number. It's got many attributes, like a name, location,
// and a timeline.

// Write the recipe (algorithm) in the comments. Then, write the code.

// Store a simple social media profile in memory
let profile = {
    name: `Ken`,
    location: {
        city: `Chicago`,
        state: `IL`,
        timeline: [`Teaching JavaScript to MBA students`, `Eating tacos`, `Riding a unicorn`]

    }
}
console.log(profile)

// Retrieve the name from the profile, store it in memory
let profileName = profile.name

// Display the name in the console
console.log(`Name is ${profileName}`)
// Retrieve the location, store it in a memory
let profileLocation = profile.location
console.log(`Location is ${profileLocation.city},${profileLocation.state}`)
// Use the location to write the city and state, in a human-readable
// format, to the JavaScript console

// Write the 3 statuses from the "timeline" to the JavaScript console

let shoppingList = [`ice cream`, `orange juice`, `spinach`]
console.log (shoppingList)

console.log(`Timeline:`)
console.log(profile.timeline[0])
console.log(profile.timeline[1])
console.log(profile.timeline[2])