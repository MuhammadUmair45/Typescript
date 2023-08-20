let todos:string[] = ["class1", "class2", "class3", "class4", "class5", "class6"]

let statuse:number = todos.length % 2;

let todosLength:number = todos.length / 2;

if(statuse) {
    todos.splice(todosLength, 1);
}
else {
    todos.splice(todosLength - 1, 2);
}
console.log(todos);
