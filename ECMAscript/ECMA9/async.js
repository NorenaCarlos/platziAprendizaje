async function* anotherGenerator(){
    yield await Promise.resolve({name:'carlos',age:25,country:'Colombia'});
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log("Hello!! thats the fiinal instruction");

async function arrayOfNames(array){
    for await (let value of array){
        console.log(value);
    }
}

const names = arrayOfNames(['Carlos','Laura','Paula','Kevin']);
console.log('After');