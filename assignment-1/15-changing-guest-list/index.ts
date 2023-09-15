let guests:string[] = ['Adam', 'Bill', 'Cynthia']

console.log(guests[0] + ", please come to dinner.")

console.log(guests[1] + ", please come to dinner.")

console.log(guests[2] + ", please come to dinner.")

console.log("Sorry, ", guests[2] + " can't make it to dinner.");

guests.splice(2, 1, "Candy");

console.log(guests);

console.log("\n" + guests[0] + ", please come to dinner.")

console.log(guests[1] + ", please come to dinner.")

console.log(guests[2] + ", please come to dinner.")