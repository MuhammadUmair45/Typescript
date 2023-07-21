let myArr = []; 
for (let i = 0; i < 10; i++) { 
  myArr.push(i); 
} 
for (var num of myArr) {
    if (num == 1) {
        console.log("1st \n");
    }
    else if(num == 2) {
        console.log("2nd \n");
    }
    else if(num == 3) {
        console.log("3rd \n");
    }
    else {
        console.log(num+"th \n");
    }
}