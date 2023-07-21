"use strict";
const usernames = ['eric', 'willie', 'admin', 'erin', 'ever'];
if (usernames.length) {
    for (var username of usernames) {
        if (username == "admin") {
            console.log("Hello " + username + ", would you like to see a status report?");
        }
        else {
            console.log("Hello " + username + ", thank you for logging in again");
        }
    }
}
else {
    console.log("We need to find some users!");
}
