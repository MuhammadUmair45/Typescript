console.log("------------");
console.log("Write a program that uses filter to remove all negative numbers from an array of numbers");
console.log("------------");

let numsArray:number[] = [1, -1, 2, -2, 3, -3, -4, 4, 5, -5];

let positiveNumsArray = numsArray.filter((number) => {
    return number > -1;
});

console.log(positiveNumsArray);

console.log("\n");

console.log("------------");
console.log("Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.");
console.log("------------");

let numArray:number[] = [1, 2, 3, 4, 5];

let positiveNumArray = numArray.map((number) => {
    return number * 2;
});

console.log(positiveNumArray);

console.log("\n");

console.log("------------");
console.log(`Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.`);
console.log("------------");

let fruits:string[] = ["apple", "banana", "cherry", "date", "grape"];

let newFruits = fruits.filter((n) => n.length > 5 );

console.log(newFruits);

console.log("\n");

console.log("------------");
console.log(`Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.`);
console.log("------------");

let numberArray:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNumberArrayMap = numberArray.filter((number) => {
    return number % 2 == 0;
}).map(function (squareNumber) {
    return Math.pow(squareNumber, 2)
});

console.log(newNumberArrayMap);

console.log("\n");

console.log("------------");
console.log(`Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.`);
console.log("------------");

let temps:number[] = [0, 10, 20, 30, 40];

let cTemps = temps.map((temp) => {
    //return temp * 9 / 5 + 32;
    return temp+'\xB0C is ' + (temp * 9 / 5 + 32) + ' \xB0F.';
});

console.log(cTemps);

console.log("\n");

console.log("------------");
console.log(`Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.`);
console.log("------------");

let doubleOdds:number[] = [3, 6, 9, 12, 15, 18];

let newDoubleOdds = doubleOdds.filter((number) => {
    return number % 2 !== 0;
}).map(function (doubleNumber) {
    return doubleNumber * 2;
});

console.log(newDoubleOdds);

console.log("\n");

console.log("------------");
console.log(`Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".`);
console.log("------------");

let names:string[] = ["Alice", "Bob", "Charlie", "David", "Emily"];
let newNames:string[] = [];
names.forEach((name) => {
    newNames.push(name + "!");
});

console.log(newNames);

console.log("\n");

console.log("------------");
console.log(`Write a program that uses filter to remove all negative numbers from an array of numbers`);
console.log("------------");

let nonNegNums:number[] = [-1, -2, -3, -4, 0, 10, 20, 30, 40, -50];

let newNonNegNums = nonNegNums.filter((n) => n >= 0 );

console.log(newNonNegNums);



