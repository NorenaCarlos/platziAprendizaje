var firstName = 'David';
firstName = 'Oscar';
console.log(firstName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat';
console.log(animal);

const fruits = () =>{
    if(true){
        var fruit1='Apple';//Function scope
        let fruit2='Kiwi';//block function
        const fruit3='Banana';//block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();