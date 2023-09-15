let myArr = []; 
for (let i = 1; i < 10; i++) { 
  myArr.push(i); 
} 
for (var num of myArr) {
    if (num == 1) {
        console.log("1st");
    }
    else if(num == 2) {
        console.log("2nd");
    }
    else if(num == 3) {
        console.log("3rd");
    }
    else {
        console.log(num+"th");
    }
}