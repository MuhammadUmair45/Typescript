let car:string = 'Subaru';

console.log("Is car == 'Subaru'? I predict True.");
console.log(car == 'Subaru');

console.log("Is car == 'subaru'? I predict False.");
console.log(car == 'subaru');

let num:number = 24;

console.log("Is num == 24? I predict True.");
console.log(num == 24);

console.log("Is num == 28? I predict False.");
console.log(num == 28);

console.log("Is num >= 28? I predict False.");
console.log(num >= 28);

console.log("Is num <= 28? I predict True.");
console.log(num <= 28);

console.log("Is num <= 28 && <= 25 ? I predict True.");
console.log(num <= 28 && num <= 25 );

console.log("Is num <= 28 || == 25 ? I predict True.");
console.log(num <= 28 || num == 25);

console.log("Array.isArray([1, 3, 5]) is Array ? I predict True.");
console.log(Array.isArray([1, 3, 5]));

console.log("Array.isArray('[]') is Array ? I predict False.");
console.log(Array.isArray('[]'));