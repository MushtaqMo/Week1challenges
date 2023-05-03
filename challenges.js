
// Leon friday task is the code below

//1.Create an array that contains 5 of your favourite drinks. Using one method, remove the items
//in position 1 and 2. (return to this )

// var favDrinks = ["cola","fanta","pepsi","lemonade","bobatea"]


// favDrinks.splice(2,1)
// favDrinks.splice(1,1)

// console.log(favDrinks)




//2.Use the Math library to create a random integer between 1 and 80

// console.log(Math.ceil( Math.random () *80 ))




//3.Create a dice roll program, generate a random number between 1 and 6 and depending on 
//the outcome, log in the terminal the number ‘rolled’ (eg “you rolled a 4”)

// console.log(Math.ceil( Math.random () *6 ))




//4. create a variable called password, have a checker in place to make sure the length of the 
//password is 6 letters or more. If the password is less than 6 letters, log “password too short”. 
//If the password is 6 or more, display the length followed by a thank you message


// let password = "mushtaq"

// if (password.length >=6){
//     console.log("password is too long. Thank you.")
// } else if (password.length <6){
//    console.log("password if too short")
// }



// 5. Have two variables called ‘bool1’ and ‘bool2’ and assign them both Boolean values(true or 
// false).Log to the console true, if exactly one of the values are true.Otherwise log false

//  let bool1 = true
//  let bool2 = false

// if (bool1 == bool2){
//   console.log("True")
// } else {
//   console.log("False")
// }






//  6.Create a variable called num. If the number is divisible by 3 log “fizz” to the console, if it’s
//divisible by 5 log “buzz” to the console. If its divisible by both 3 and 5 log “fizz buzz” to the
//console. Otherwise log num to the console.


// let num = 5

// if (num % 5 == 0 && num % 3 == 0) {
//   console.log("FizzBuzz")
// } else if (num % 5 == 0) {
//   console.log("Buzz")
// } else if (num % 3 == 0) {
//   console.log("Fizz")
// } else {
//   console.log(`${num}`)
// }




//7. Create 2 variables, assign a number to one (between 1 – 10) and generate a random number
//to the other variable (between 1 – 10). Create a loop that checks if the number assigned and
//the generated number are the same, if they are not log to the console “not the same”
//followed by the randomly generate number, then generate another random number to try
//again. When they match, log to the console how many loop cycles it went through to match
//the two numbers

// let assignedNumber = 4;
// let randomNumber = Math.ceil(Math.random() = 10)
// let counter = 0
// console.log(`The number we are looking to match is ${assignedNumber} `)
// matched = false

// while (matched == false) {
//   counter++
//   if (assignedNumber === randomNumber) {
//     console.log(`You got a match. The random number was ${randomNumber} it took ${counter} cycles`)
//     satched = true
//   }
//   else {
//     console.log(`Not the same. Random number was ${randomNumber}`)
//     randomNumber = Math.ceil(Math.random() = 10)
//   }

// }


//Stretch activity

// let text = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi'

// let result = text.indexOf("i")

// console.log(result)