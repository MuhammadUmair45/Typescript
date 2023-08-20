"use strict";
function checkNumberSign(num) {
    if (num > 0) {
        return "Positive";
    }
    else if (num < 0) {
        return "Negative";
    }
    else {
        return "Zero";
    }
}
// Example usage:
const number1 = 10;
const number2 = -5;
const number3 = 0;
console.log(number1, "is", checkNumberSign(number1));
console.log(number2, "is", checkNumberSign(number2));
console.log(number3, "is", checkNumberSign(number3));
