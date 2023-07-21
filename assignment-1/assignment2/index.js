"use strict";
let pName = "Hamid ahmed umair";
let lowerCase = pName.toLowerCase();
console.log("Name in Lower case:", lowerCase);
let upperCase = pName.toUpperCase();
console.log("Name in Lower case:", upperCase);
// let titleCase: string = pName;
let titleCase = pName.split(" ").map((l) => l[0].toUpperCase() + l.substring(1)).join(" ");
console.log("Name in Title case:", titleCase);
