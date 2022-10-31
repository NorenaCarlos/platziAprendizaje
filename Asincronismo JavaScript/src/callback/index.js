function sum(num1, num2) {
    return num1+num2;
}

function calc(num1,num2,callback) {
    return callback(num1,num2);
}

console.log(calc(2,5,sum));

setTimeout(function () {
    console.log("Hello world");
},2000);

function greeting(name){
    console.log(`Hello ${name}`);
}

setTimeout(greeting,2000,'Carlos')


