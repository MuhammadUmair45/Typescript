let guests = ['Adam', 'Bill', 'Cynthia']

console.log(guests[0] + ", please come to dinner.")

console.log(guests[1] + ", please come to dinner.")

console.log(guests[2] + ", please come to dinner.")

console.log("Sorry, ", guests[2] + " can't make it to dinner.");

guests.splice(2, 1, "Candy");

console.log("\n" + guests[0] + ", please come to dinner.");

console.log(guests[1] + ", please come to dinner.");

console.log(guests[2] + ", please come to dinner. \n");

console.log("we've got more space for guests \n");

guests.splice(0, 0, "Michael");

let middleIndex = Math.floor(guests.length/2);
guests.splice(middleIndex, 0, "Holly");

guests.push("Donald");

for(let i=0; i < guests.length; i++) {
    console.log(guests[i]+", please come to dinner.");
}