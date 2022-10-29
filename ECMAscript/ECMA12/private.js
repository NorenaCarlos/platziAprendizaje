//setters getters

class user{
    constructor(name='Sin Nombre',age=18){
        this.name=name;
        this.age=age;
    }
    #speak(){
        return('hello');

    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    get #uAge(){
        return this.age;
    }
    set #uAge(newAge){
        this.age=newAge;
    }
}

const carlos = new user('Carlos',25);
console.log(carlos.uAge);
console.log(carlos.uAge=28);