var width:number = 10;
var height:number = 20;

var rectangle:number = width * height;

console.log("Area of rectangle is: ", rectangle ,"\n");

console.log("==== Next tasks ===== \n");

function calculateCubeVolume(number:number) {
  return number ** 3;
}

let number:number = 5;
const volume = calculateCubeVolume(number);

console.log("Volume of Cube is: ", volume ,"\n");

console.log("==== Next tasks ===== \n");

function checkNumberSign(num: number): string {
    if (num > 0) {
      return "Positive";
    } else if (num < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
  }
  
  // Example usage:
  const number1 = 10;
  const number2 = -5;
  const number3 = 0;
  
  console.log(number1, "is", checkNumberSign(number1));
  console.log(number2, "is", checkNumberSign(number2));
  console.log(number3, "is", checkNumberSign(number3) ,"\n");

console.log("==== Next tasks ===== \n");

const oddOrEven = (val:number) => {
    return val % 2 === 0 ? "even":"odd";
}

let val = 4;
console.log("the number is: ", oddOrEven(val) ,"\n");

console.log("==== Next tasks ===== \n");

const validVote = (age:number) => {
    return age >= 18 ? "you are eligible for vote" : "you are not eligible for vote";
}

let age = 9;
console.log(validVote(age) ,"\n");

console.log("==== Next tasks ===== \n");

const excuteExpression = () => {
    return ((10+5)*3-2) / (4%3)-7;
}

console.log("Calculation is: ", excuteExpression());

console.log("==== Next tasks =====");