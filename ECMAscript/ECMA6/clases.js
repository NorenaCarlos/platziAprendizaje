/*
//Declaracion de la clase
class User{};
//
const newUser = new User();
*/
/*
class user{
    //metodos
    greeting(){
        return 'Hello';
    }
}
const carlos = new user();
console.log(carlos.greeting())
*/

/*
// constructor
class user{
    constructor(){
        console.log('nuevo usuario');
    }
    greeting(){
        return 'Hello';
    }
}
const andres = new user();
*/

/*
//this hace referencia al elemento padre que lo contiene

class user{
    constructor(name='Carlos'){
        this.name=name;
    }
    speak(){
        return 'hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ernesto');
console.log(ana.greeting());
*/


//setters getters

class user{
    constructor(name='Sin Nombre',age=18){
        this.name=name;
        this.age=age;
    }
    speak(){
        return('hello');

    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    get uAge(){
        return this.age;
    }
    set uAge(newAge){
        this.age=newAge;
    }
}

const carlos = new user('Carlos',25);
console.log(carlos.uAge);
console.log(carlos.uAge=28);