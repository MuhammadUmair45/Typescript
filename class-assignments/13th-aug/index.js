"use strict";
let todos = ["class1", "class2", "class3", "class4", "class5", "class6"];
let statuse = todos.length % 2;
console.log(statuse);
let todosLength = todos.length / 2;
if (statuse) {
    todos.splice(todosLength, 1);
}
else {
    todos.splice(todosLength - 1, 2);
}
console.log(todos);
