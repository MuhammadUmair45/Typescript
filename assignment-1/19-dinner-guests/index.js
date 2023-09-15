"use strict";
let guests = ['Adam', 'Bill', 'Cynthia'];
console.log(guests[0] + ", please come to dinner.");
console.log(guests[1] + ", please come to dinner.");
console.log(guests[2] + ", please come to dinner.");
console.log("Sorry, ", guests[2] + " can't make it to dinner.");
guests.splice(2, 1, "Candy");
console.log("\n" + guests[0] + ", please come to dinner.");
console.log(guests[1] + ", please come to dinner.");
console.log(guests[2] + ", please come to dinner. \n");
console.log("we've got more space for guests \n");
guests.splice(0, 0, "Michael");
let middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Holly");
guests.push("Donald");
for (let i = 0; i < guests.length; i++) {
    console.log(guests[i] + ", please come to dinner. \n");
}
console.log("Sorry, we can only invite two people to dinner. \n");
for (let i = guests.length; i > 2; i--) {
    console.log(" Sorry, " + guests[i - 1] + " there's no room at the table. \n");
    guests.pop();
    console.log(guests);
}
console.log("\n " + guests.length + " No. of people I'm inviting to the dinner. \n");
for (let i = 0; i < guests.length; i++) {
    console.log(guests[i] + ", please come to dinner. \n");
}
guests.pop();
guests.pop();
console.log(guests);
