const oddOrEven = (val:number) => {
    return val % 2 === 0 ? "even":"odd";
}

let val = 4;
console.log("the number is: ", oddOrEven(val));