let locations:string[] = ['Hyderabad', 'Multan', 'Karachi', 'Lahore', 'Islamabad'];

console.log("Original: "+locations);

let newLocations:string[] = [...locations];

console.log("\n Sorted: "+newLocations.sort());

console.log("\n Original: "+locations);

console.log("\n Reversed Sorted: "+newLocations.reverse());

console.log("\n Original: "+locations);

console.log("\n Reversed Again: "+locations.reverse());

console.log("\n Original Again: "+locations.reverse());

console.log("\n Sorted: "+locations.sort());

console.log("\n Reversed: "+locations.reverse());