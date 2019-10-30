// //string is a series of character- use "``" <- this
// console.log(`hello world`);

// // numbers is a numerals- also can use binary operator- have to have 2 sides
// console.log(3+5) //add
// console.log(3-5) //subtract
// console.log(3*5) //multiply
// console.log(3/5) //divide
// console.log(3%5) //modulus
// console.log(3**5) //exponent

// // variables has to be camelcasing like second word first letter is in caps
// //declaring variables, goving them starting values
// //let/ var / const is the same 
// let custumerName = `George`;
// let bitCoin = 3;
// //Hi George, your balance is:💰 0
// console.log(` Hi ${custumerName}, your balance is 💰 ${bitCoin}`)

// // assigning a new value to a variable
// bitCoin = bitCoin + 4;
// console.log(` Hi ${custumerName}, your balance is 💰 ${bitCoin}`)

// bitCoin = bitCoin - 1;
// console.log(` Hi ${custumerName}, your balance is 💰 ${bitCoin}`)
//          // --------------------------------------------- //

// In class assignment //

//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."
let jobTitle = `UI Designer`
let geoLocation = `Downtown`
let annSalary = `$60000`
let companyName = `Github`

console.log(`You will be a ${jobTitle} in ${geoLocation}, making ${annSalary} for ${companyName}.`)
         // --------------------------------------------- //



//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: "They are NN years old.", substituting the values.
let currentYear = `2019`
let birthYear = `1994`
let yearsOld = `0`

yearsOld = currentYear - birthYear;

console.log(`They are ${yearsOld} years old.`)
         // --------------------------------------------- //



//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
let currentAge = `25`
let maximumAge = `57`
let estimatedAmount = `2`
let totalSupply = `0`

estimatedAmount = estimatedAmount*365
totalSupply = (maximumAge - currentAge)* estimatedAmount

console.log(`You will need ${totalSupply} to last you until the ripe old age of ${maximumAge}`)
         // --------------------------------------------- //




//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".
let circleRadius = `6`
let mathPi = `3.142`
let circleCircumference = `0`
let circleArea = `0`

circleCircumference = mathPi * (2*circleRadius)
circleArea = mathPi * (circleRadius**2)

console.log(`The circumference is ${circleCircumference}.`)
console.log(`The area is ${circleArea}.`)
         // --------------------------------------------- //




//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."
let tempCelsius = `37`
let fahTemp = `104`

tempFahrenheit = (tempCelsius * (9/5) + 32)
celTemp = (fahTemp - 32) * (5/9)

console.log(`${tempCelsius}°C is ${tempFahrenheit}°F.`)
console.log(`${fahTemp}°F is ${celTemp}°C`)
         // --------------------------------------------- //