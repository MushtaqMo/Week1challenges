//console.log("file running...")
//console.log("all around the world".charAt(7).toUpperCase())
//let firstName = "Mushtaq"
//firstName = "batman"
//console.log(firstName)
//const surname = "Mohamud"
//console.log(surname)
//surname = "Mawahib"
//console.log(surname)


//let num1 = 10
//let num2 = 5

//num1 = num1 +2
//num += 2

//console.log(num1)
//let firstName = "mushtaq"
//let favouriteDrink = "Coffee"

//console.log(`hello, my name is ${firstName}, and my favourite drink is ${favouriteDrink}`)
//console.log("my favourite drink is" + favouriteDrink)

let firstName = "muna"
let favouriteColour = "Blue"
let age = "20"

console.log(`hello, my name is ${firstName}, I am ${20}, and my favouriteColour is ${favouriteColour}`)

let breakFast = "eggs"
let lunch = "chips"
let dinner = "rice"

console.log(`today I had ${breakFast}, for breakfast, ${lunch}, for lunch and ${dinner} for dinner`)

let breakFast2 = "cereal"
let lunch2 = "chicken"
let dinner2 = "pasta"

console.log(`tomorrow I will have ${breakFast2} for breakfast, ${lunch2} for lunch and ${dinner2} for dinner`)

let today = new Date()
let birthday = new Date()
birthday.setDate(12)
birthday.setMonth(4)
let time = today.getTime() - birthday.getTime()
console.log(time/ (1000 * 60 * 60 * 24))