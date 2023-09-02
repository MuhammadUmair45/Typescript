"use strict";
// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.
console.log("-----------");
console.log("Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array.");
console.log("----------- \n");
let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numIndex = 3;
let numValue = 11;
function splice(array, index, value) {
    array.splice(index, 0, value);
    console.log("New Array after splice: ", array, "\n");
}
splice(numArray, numIndex, numValue);
// Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation
console.log("-----------");
console.log("Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation");
console.log("----------- \n");
let shoppingCart = ["Shoes", "Bags", "Clothes", "Sports"];
console.log("Original Shopping Cart List", shoppingCart);
function addItems() {
    shoppingCart.splice(4, 0, "Foods");
    console.log("New Item (Foods) added in Cart: ", shoppingCart);
}
function removeItems() {
    shoppingCart.splice(1, 1);
    console.log("An Item (Bags) removed from Cart: ", shoppingCart);
}
function updateItems() {
    shoppingCart.splice(3, 1, "Watches");
    console.log("An Item (Watches) updated in Cart: ", shoppingCart);
}
addItems();
removeItems();
updateItems();
console.log("\n");
// Write a program that uses a while loop to print the first 25 integers.
console.log("-----------");
console.log("Write a program that uses a while loop to print the first 25 integers.");
console.log("----------- \n");
let number = 1;
while (number <= 25) {
    console.log(number);
    number++;
}
console.log("\n");
// Write a program that uses a while loop to print the first 10 even numbers.
console.log("-----------");
console.log("Write a program that uses a while loop to print the first 10 even numbers.");
console.log("----------- \n");
let totalEven = 10;
let evenNumber = 0;
let counter = 1;
while (counter <= totalEven) {
    if (evenNumber % 2 == 0) {
        evenNumber = evenNumber + 2;
        console.log(evenNumber);
    }
    counter++;
}
console.log("\n");
// Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
console.log("-----------");
console.log("Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.");
console.log("----------- \n");
let facNumber = 10;
function facNums(facNum) {
    var res = facNum;
    // checking if number is negative
    if (facNum < 0) {
        console.log('Error! Factorial for negative number does not exist.');
    }
    // if number is 0
    else if (number == 0) {
        console.log(`The factorial of ${facNum} is 1.`);
    }
    // if number is positive
    else {
        while (facNum > 1) {
            facNum--;
            res *= facNum;
        }
        // let fact = 1;
        // for (i = 1; i <= number; i++) {
        //     fact *= i;
        // }
        console.log(`The factorial of ${facNumber} is ${res}.`);
    }
}
facNums(facNumber);
console.log("\n");
// Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
console.log("-----------");
console.log("Write a program having an array of numbers if the number is negative it should remove the negative number from the array.");
console.log("----------- \n");
function func() {
    const arr = [9, 38, 45, -25, 42, -12, 98, -98, -198, 298];
    let nonNegArray = [];
    let x = 0;
    for (x; x < arr.length; x++) {
        if (arr[x] > 0)
            nonNegArray.push(arr[x]);
    }
    console.log(nonNegArray);
}
func();
console.log("\n");
// Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.
console.log("-----------");
console.log("Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return the sum of all the numbers in the array.");
console.log("----------- \n");
let calArray = [12, 1, 36, 4];
function cal(calArray) {
    let total = 0;
    let i = 0;
    while (i <= calArray.length - 1) {
        total += calArray[i];
        i++;
    }
    console.log(`Total of ${calArray} is: ${total}`);
}
cal(calArray);
console.log("\n");
// Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.
console.log("-----------");
console.log("Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in an array. Use a while loop to perform the conversion for each temperature.");
console.log("----------- \n");
//let listOfTemps:number[] = [50, 60, 70, 80];
let listOfTemps = [0, 10, 20, 30, 40];
let newListOfTemps = [];
function cToF(celsius) {
    let cTemp = celsius;
    let cToFahr = cTemp * 9 / 5 + 32;
    let message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}
let i = 0;
while (i <= listOfTemps.length - 1) {
    cToF(listOfTemps[i]);
    newListOfTemps.push(listOfTemps[i]);
    i++;
}
console.log(newListOfTemps);
