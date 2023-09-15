"use strict";
let current_users = ['Amjad', 'Aslam', 'Akbar', 'Adan', 'Bill'];
let new_users = ['aslam', 'Willie', 'PHIL', 'Bill', 'Mike'];
const current_users_lowercaseArray = current_users.map(item => item.toLowerCase());
//const new_users_lowercaseArray = new_users.map(item => item.toLowerCase());
// for (let i = 0; i < current_users.length; i++) {
//     for (let j = 0; j < new_users.length; j++) {
//         // Compare the element of each and
//         // every element from both of the
//         // arrays
//         if (current_users[i] === new_users[j]) {
//             console.log("Sorry " +new_users[j]+ " is already taken");
//         }
//     }
//     console.log(current_users[i]+ " Username is available!!!");
// }
for (var username in new_users) {
    if (current_users_lowercaseArray.includes(new_users[username].toLowerCase())) {
        console.log("Sorry " + new_users[username] + " is already taken");
    }
    else {
        console.log(new_users[username] + " Username is available!!!");
    }
}
