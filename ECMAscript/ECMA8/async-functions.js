const fnAsync =()=>{
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(()=>resolve('Async'),5000)
        : reject(new Error('Error!'));
    })
}

const anotherFunction = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello');
}

console.log('before');
anotherFunction();
console.log('After');