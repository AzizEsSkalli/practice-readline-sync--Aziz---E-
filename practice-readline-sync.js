const input = require('readline-sync');

let name = input.question("What's your name? ");
console.log("Hello, " + name + "!");
let dataType = input.question("What are the data types? ");
let conversionType = Number(input.question("How many types of data conversion in JavaScript? "));
let booleanValue = input.question("Which values does the boolean accept? ");
let stringAddition = input.question("What does it mean concatenation? ");
let stringToNumber = input.question("Which function we use to convert string to number? ")
console.log(dataType, "  " + conversionType, "  " + booleanValue, "  " + stringAddition, "  " + stringToNumber);


