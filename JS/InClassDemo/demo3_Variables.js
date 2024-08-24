const constant = 10;
let x = 100;
var y = 2; 

console.log("no scope");
console.log(constant + x + y);

//constant = 20;

if(true){
    x = 10;
    y = 10;
    console.log("outside to inside of scope");
    console.log(constant + x + y);
}

if(true){
    let z = 20;
    var a = 20;
}
console.log("var created inside scope");
console.log(a);
console.log("let created inside scope");
console.log(z);