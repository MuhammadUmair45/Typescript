let current_users:string[] = ['Amjad', 'Aslam', 'Akbar', 'Adan', 'Bill']
let new_users:string[] = ['Aslam', 'Willie', 'PHIL', 'Bill', 'Mike']

const current_users_lowercaseArray = current_users.map(item => item.toLowerCase());

for ( var username in new_users ) {
    if (current_users_lowercaseArray.includes(new_users[username].toLowerCase()) ) {
        console.log("Sorry " +new_users[username]+ " is already taken");
    }
    else {
        console.log(new_users[username]+ " Username is available!!!");
    }
}