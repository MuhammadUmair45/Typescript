"use strict";
// Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
console.log("Develop a program that calculates and prints the sum of the first n even numbers using a for loop. \n");
let n = 99;
let sum = 0;
for (let i = 0; i <= n; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
    }
}
console.log("Sum is: ", sum, "\n");
// Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
console.log("-------");
console.log("Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.");
console.log("------- \n");
// Initializing numbers array
let numbers = [10, 23, 12, 21];
// Declaring empty Even array
let even = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0)
        even.push(numbers[i]);
}
// Printing output
console.log(`Even numbers in an array are: ${even} \n`);
// Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
console.log("-------");
console.log("Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones");
console.log("------- \n");
// Initializing numbers array
let numbs = [10, 23, 12, 21, 43, 53, 63, 94];
// Declaring empty New array
let newArray = [];
for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] % 2 !== 0) {
        newArray.push(numbs[i]);
    }
}
// Printing output
console.log(`Only odd numbers in an array are: ${newArray} \n`);
// Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
console.log("-------");
console.log("Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.");
console.log("------- \n");
let radiusValue = 2;
//let pi = Math.PI;
let pi = 3.14;
const areaOfCircle = (radiusValue, pi) => {
    return pi * radiusValue * radiusValue;
};
// function areaOfCircle(radiusValue:number, pi:number) {
//     return pi * radiusValue * radiusValue;
// }
console.log("The area of the circle is: " + areaOfCircle(radiusValue, pi), "\n");
// Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
console.log("-------");
console.log("Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.");
console.log("------- \n");
// Initializing numbers array
let grades = [50, 13, 12, 62, 71, 43, 63, 12, 94, 48];
// Declaring empty New array
let newGradesArray = [];
for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 50) {
        newGradesArray.splice(i, 0, grades[i]);
    }
}
// Printing output
console.log(`Only numbers greater than 50 in an array are: ${newGradesArray} \n`);
// Write a program that uses a function to find the largest element in an array of numbers.
console.log("-------");
console.log("Write a program that uses a function to find the largest element in an array of numbers.");
console.log("------- \n");
var array = [3, 6, 2, 56, 32, 5, 89, 32, 90];
var largest = 0;
for (let i = 0; i <= largest; i++) {
    if (array[i] > largest) {
        var largest = array[i];
    }
}
console.log(`Largest number is: ${largest}`);
