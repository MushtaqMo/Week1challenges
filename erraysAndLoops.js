//


//let favSongs = [
    //"beyonce - halo",
    //"beyonce - lemonade",
    //"beyonce - singleladies"
//]
//favSongs.push("beyonce - irreplaceable")
//favSongs.pop()
//console.log(favSongs)


//const numbers = [
   // "65", 
    //"44",
    //"12", 
    //"4"
//]
//const newArr = numbers.map(myFunction)

//document.getElementById("demo").innerHTML = newArr
//function myFunction(65) {
    //return num * 10   
//}
//console.log(numbers)


//my work wrong
//const numbers = [65, 44, 12, 4];
//const newArr = numbers.map(myFunction)

//function myFunction(numbers) {
  //return numbers * 10
//}
//console.log[numbers *10]


//for (let i = 0; i < 6; i++){
    //console.log(Math.ceil (Math.random() *50))
//}


//I need to fix 

//let cards = ["diamonds", "spade", "heart", "clubs"]
//let currentCard = "clubs"

//while (currentCard != "spade"){
    //console.log(currentCard)
    //currentCard = cards[Math.floor(Math.random()*4)]
//}
//console.log(currentCard)


//movies task 1
//let favMovies = [
   // "twilight",
   // "newmoon",
   // "eclipse",
    
//]
//console.log(favMovies[0])
//console.log(favMovies[1])
//console.log(favMovies[2])

//favMovies.push("breakingdawn")

//for (let i = 0; i < favMovies.length; i++){
    //console.log(favMovies[i], "i value =", i)

//}

//task 2 random numbers

//console.log(Math.ceil( Math.random () *50 ))


// task 2

//let nums =[]

//for(let i = 0; i < 6; i++){
//nums.push(Math.ceil(Math.random() *50))
//}
//console.log(nums)





// Leon friday task is the code below

//1.Create an array that contains 5 of your favourite drinks. Using one method, remove the items
//in position 1 and 2. (return to this )

//var favDrinks = ["cola","fanta","pepsi","lemonade","bobatea"]


//favDrinks.splice(2,1)
//favDrinks.splice(1,1)

//console.log(favDrinks)



//2.Use the Math library to create a random integer between 1 and 80

//console.log(Math.ceil( Math.random () *80 ))




//3.Create a dice roll program, generate a random number between 1 and 6 and depending on 
//the outcome, log in the terminal the number ‘rolled’ (eg “you rolled a 4”)

//console.log(Math.ceil( Math.random () *6 ))




//4. create a variable called password, have a checker in place to make sure the length of the 
//password is 6 letters or more. If the password is less than 6 letters, log “password too short”. 
//If the password is 6 or more, display the length followed by a thank you message


//let password = document.getElementByID()

//if (password.length >6){
  //  console.log("password is too short")
//} else if (password.length <6){
 //   console.log("thank you")
//}



//5. Have two variables called ‘bool1’ and ‘bool2’ and assign them both Boolean values (true or 
//false). Log to the console true, if exactly one of the values are true. Otherwise log false

//let bool1 = true
//let bool2 = false

//if (bool1 == true ){
   // console.log("true")
//} else if (bool1 == false){
 //   console.log("false")
//} 




//  6.Create a variable called num. If the number is divisible by 3 log “fizz” to the console, if it’s 
//divisible by 5 log “buzz” to the console. If its divisible by both 3 and 5 log “fizz buzz” to the 
//console. Otherwise log num to the console.


//let num = 5

//if (num % 3 ===0){
//    console.log("fizz")
//} else if (num % 5 ==0){
//    console.log("buzz")
//}




//7. Create 2 variables, assign a number to one (between 1 – 10) and generate a random number 
//to the other variable (between 1 – 10). Create a loop that checks if the number assigned and 
//the generated number are the same, if they are not log to the console “not the same”
//followed by the randomly generate number, then generate another random number to try 
//again. When they match, log to the console how many loop cycles it went through to match 
//the two numbers

//let num1 = 6
//let num2 = (Math.ceil( Math.random () *10 ))

//while (num1 == num2){
    //console.log("we are the same!")
    //num++

//} 

//console.log("we are not the same!")




//Stretch activity

//let text = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi'

//let result = text.indexOf("i")

//console.log(result)

//let coffeeIsGrinding = false

//let pressGrindBeans = () => {
 //   if(coffeeIsGrinding) == true) {
  //      console.log("stopping the grind")
        //coffeeIsGrinding = false
  //  } else {
    //    console.log("grinding about to begin")
    //    coffeeIsGrinding = true
   // }
//}
//pressGrindBeans()

//let coffeeIsGrinding = false
//let pressGrindBeans = () => {
//    console.log("stopping the grind")
 //   coffeeIsGrinding = false
//}else { console.log("grinding about to begin")
///coffeeIsGrinding = true

//}

//let cashWithdrawal = (amount,accnum) => {
 //   console.log(`withdrawing £${amount} from account number ${accnum}`)
//}

//cashWithdrawal(30,888778877)

//cashWithdrawal(45,445544554)

//let addUp = (num1, num2) => {
 //   return num1 + num2
//}

//addUp(2,3)
//console.log (addUp(4,5))

//let multiplyByNineFifths = (celsius) => {
   // return celsius * 9/5 
//}
//let  getFahrenheit = (celsius) => {
 //   return multiplyByNineFifths(celsius) + 32
    
//}
//console.log(getFahrenheit(15))



//let minus =(fah) => {
//    return fah - 32
//}
//let getCelsius = (degree) => {
 //   return minus(degree) * 5/9
//}
//console.log(getCelsius(59))


let orderCount = 0

const take0rder = (cheese,tomato) => {
    console.log(`Pizza with ${cheese,tomato}`)
    orderCount++

}
take0rder("cheese,tomato")

function getMoneyFromAtm(amount){
    if (amount => balance){
        return
    }
}