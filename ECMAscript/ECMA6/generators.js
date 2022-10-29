function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate(['Lina','Camila','Carlos','Laura','David']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);