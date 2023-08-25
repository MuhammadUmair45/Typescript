"use strict";
const validVote = (age) => {
    return age >= 18 ? "you are eligible for vote" : "you are not eligible for vote";
};
let age = 9;
console.log(validVote(age));
