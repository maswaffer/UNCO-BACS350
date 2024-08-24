function normal_func(x){
    console.log('Normal func');
    console.log(x);
}

normal_func(5);
console.log('-----------------')

var variable = (x) => {
    console.log("Variable func");
    console.log(x);
}

variable('ABCD')
console.log('-----------------')

const constant = function(y){
    console.log('Const func');
    console.log(y);
    return y + y;
}

let r = constant('Hello from constant');
console.log(r);
console.log('-----------------')

function closure(p) {
    console.log(p);
    return () => p;
}

let n1 = closure(1);
let n2 = closure(2);
n1();
n2();

console.log('-----------------')

normal_func(constant("this is my internal argument"))
