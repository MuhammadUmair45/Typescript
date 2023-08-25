//  - Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.

console.log("Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.");

function cToF(celsius:number) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit:number) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(45);

console.log("\n");

//  - Write a program that calculates the percentage.

console.log("--------------");
console.log("Write a program that calculates the percentage.");
console.log("--------------");

let marks:number[] = [10, 20, 30, 40, 50];
let sum:number = 0;
let percentage;

for(let i:number = 0; i<=marks.length - 1; i++) {
  sum += marks[i];
  let marksLength = marks.length;
  percentage = sum / marksLength;
}
console.log(percentage);

console.log("\n");

// - Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.

console.log("--------------");
console.log("Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.");
console.log("--------------");

let days:number = 17;
let a:number[] = [];
let DAYS_IN_WEEK:number = 7;

function findWeeksDays(number_of_days:number) {
  let weak:number, days:number;

  // Assume that years
  weak = Math.floor((number_of_days % 365) / DAYS_IN_WEEK);
  days = (number_of_days % 365) % DAYS_IN_WEEK;
  
  console.log(weak, "weeks and " , days, "days");
}
findWeeksDays(22);
console.log("\n");

//  - Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.

console.log("--------------");
console.log("Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.");
console.log("--------------");

let prodPrice:number = 97;
let percentagePrice:number;

if (prodPrice > 100) {
  percentagePrice = (prodPrice * 10) / 100;
  console.log("You got discount of PKR", percentagePrice);
}
else {
  percentagePrice = (prodPrice * 5) / 100;
  console.log("You got discount of PKR", percentagePrice);
}
console.log("\n");

// Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."

console.log("--------------");
console.log(`Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."`);
console.log("--------------");

let age = 10;

if(age < 12) {
    console.log("Child")
}
else if(age < 20) {
    console.log("Teenager")
}
else {
    console.log("Adult")
}
console.log("\n");

// Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.

console.log("--------------");
console.log(`Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.`);
console.log("--------------");

let temp = 22;

if(temp < 0) {
    console.log("Wear Very Very warm Clothes!!!");
}
else if(temp < 10) {
    console.log("Wear Very warm Clothes!!!")
}
else if(temp < 20) {
    console.log("Wear Warm Clothes!!!")
}
else if(temp < 30) {
    console.log("Normal Clothes!!!")
}
else if(temp < 40) {
    console.log("Summer Clothes!!!")
}
else {
    console.log("Full Summer Clothes!!!")
}

console.log("\n");

// Write a program that checks if the given number is  divisible by 3 or 5 or both or not divisible by anyone show output accordingly.

console.log("--------------");
console.log(`Write a program that checks if the given number is divisible by 3 or 5 or both or not divisible by anyone show output accordingly.`);
console.log("--------------");

let givenNum = 30;

if(givenNum%3 == 0 && givenNum%5 == 0) {
  console.log(givenNum, "is divisible by 3 and 5 both!!!");
}
else if(givenNum%3 == 0) {
    console.log(givenNum, "is divisible by 3");
}
else if(givenNum%5 == 0) {
  console.log(givenNum, "is divisible by 5");
}
else {
  console.log(givenNum, "is not divisible by 3 or 5");
}

console.log("\n");

// Write a program that checks if the given year is leap year or not.

console.log("--------------");
console.log(`Write a program that checks if the given year is leap year or not.`);
console.log("--------------");

// program to check leap year

let leapYear:number = 2023;

function checkLeapYear(year:number) {

  //three conditions to find out the leap year
  if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
      console.log(year + ' is a leap year');
  } else {
      console.log(year + ' is not a leap year');
  }
}

checkLeapYear(leapYear);

console.log("\n");

// Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.

console.log("--------------");
console.log(`Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.`);
console.log("--------------");

let dayNum:number = 2;

if (dayNum == 1) {
  console.log("Sunday");
}
else if (dayNum == 2) {
  console.log("Monday");
}
else if (dayNum == 3) {
  console.log("Tuesday");
}
else if (dayNum == 4) {
  console.log("Wednesday");
}
else if (dayNum == 5) {
  console.log("Thursday");
}
else if (dayNum == 6) {
  console.log("Friday");
}
else {
  console.log("Saturday");
}

console.log("\n");

// Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax

console.log("--------------");
console.log(`Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax`);
console.log("--------------");

let units:number = 597;
let billAmount:number = 5357; 
let perPrice:number;

if (units < 100) {
  console.log("You got no extra charge of Tax");
}
else if (units < 200) {
  perPrice = (billAmount * 10) / 100;
  console.log("You got charge of PKR", perPrice, "Tax, which is 10%");
}
else if (units < 350) {
  perPrice = (billAmount * 15) / 100;
  console.log("You got charge of PKR", perPrice, "Tax, which is 15%");
}
else if (units < 500) {
  perPrice = (billAmount * 20) / 100;
  console.log("You got charge of PKR", perPrice, "Tax, which is 20%");
}
else {
  perPrice = (billAmount * 25) / 100;
  console.log("You got charge of PKR", perPrice, "Tax, which is 25%");
}
console.log("\n");

console.log(`Assignment Ends here!!!`);
console.log("--------------");