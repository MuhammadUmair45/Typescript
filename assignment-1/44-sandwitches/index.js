"use strict";
function make_sandwich(...items) {
    console.log("\nI'll make you a great sandwich:");
    for (var item in items) {
        console.log("  ...adding " + items[item] + " to your sandwich.");
    }
    console.log("Your sandwich is ready!");
}
make_sandwich('roast beef', 'cheddar cheese', 'lettuce', 'honey dijon');
make_sandwich('turkey', 'apple slices', 'honey mustard');
make_sandwich('peanut butter', 'strawberry jam');
