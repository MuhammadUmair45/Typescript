"use strict";
// function show_magicians(magicians: string[]) {
//     for (var i = 0; i < magicians.length; i++) {
//         console.log(magicians[i]);
//     }
// }
// function great_magician(magicians: string[]) {
//     let great_magicians = [];
//     while(magicians){
//         var magician = magicians.pop();
//         var great_magician = magician + " the great!";
//         great_magicians.append(great_magician);
//     }
//     for (great_magician in great_magicians) {
//         magicians.append(great_magician);
//     }
// }
// let magicians = ['Michael', 'Donald', 'Baker']
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function great_magician(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i] + " the great!!!");
    }
}
let magicians = ['Michael', 'Donald', 'Baker'];
// show_magicians(magicians)
// great_magician(magicians)
// show_magicians(magicians)
show_magicians(magicians);
// console.log("Original magicians " + show_magicians(magicians));
console.log("Great magicians: \n");
great_magician(magicians);
console.log("Original magicians: \n");
show_magicians(magicians);
