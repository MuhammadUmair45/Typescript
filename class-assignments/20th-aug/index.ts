let sum:number = 0;
let list:number[] = [];
for(let i:number = 0; i<=100; i++) {
    if(i%2 == 0) {
        sum = sum + i;
        list.push(i);
    }
}
console.log("Sum is: ", sum, list);