let current_users = ['Amjad', 'Aslam', 'Akbar', 'Adan', 'Bill']
let new_users = ['Aslam', 'Willie', 'PHIL', 'Bill', 'Mike']

for (let i = 0; i < current_users.length; i++) {
 
    for (let j = 0; j < new_users.length; j++) {

        // Compare the element of each and
        // every element from both of the
        // arrays
        if (current_users[i] === new_users[j]) {

            // Return if common element found
            console.log("Sorry " +new_users[j]+ " is already taken");
            //return true;
        }
    }
    console.log(current_users[i]+ " Username is available!!!");
}