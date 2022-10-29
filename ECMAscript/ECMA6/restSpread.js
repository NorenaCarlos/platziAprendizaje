//Arrays destructuring
let fruits = ['Apple','Banana'];
let [a, b] = fruits;
console.log(a,fruits[0]);

// Object destructuring
let user = {userName: 'Oscar',age: 34};
let {userName, age}=user;
console.log(userName,user.age);

// Spread operator
let person = {name:'Oscar',age:28};
let country = 'COL';
let data = {...person, country};
person ={...person, country};
console.log(data);
console.log(person);

//rest
function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1,1,2,3,4);