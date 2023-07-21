let pName: string = "Hamid ahmed umair";

let lowerCase: string = pName.toLowerCase();
console.log("Name in Lower case:", lowerCase);

let upperCase: string = pName.toUpperCase();
console.log("Name in Lower case:", upperCase);

// let titleCase: string = pName;
let titleCase: string = pName.split(" ").map((l: string) => l[0].toUpperCase() + l.substring(1)).join(" ")
console.log("Name in Title case:", titleCase);