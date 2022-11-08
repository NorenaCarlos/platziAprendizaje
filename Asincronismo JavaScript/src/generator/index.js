function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

const generator = gen();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

function* iterate(array){
    for (let value of array) {
        yield value
    }
}

const it = iterate(["juan","Ana","Daniela","Omar","Mariana"]);

console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())