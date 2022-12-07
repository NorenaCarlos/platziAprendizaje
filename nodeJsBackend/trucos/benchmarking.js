console.time('todo');

let suma = 0;
console.time('bucle');
for (let i=0;i< 500000000;i++){
    suma +=i;
}
console.timeEnd('bucle');

let suma2 = 0;
console.time('bucle2');
for (let i=0;i< 500000000;i++){
    suma2 +=i;
}
console.timeEnd('bucle2');
console.log('empieza proceso asincrono')
console.time('asincrono');
asincrona().then(()=>{
    console.timeEnd('asincrono');
});

console.timeEnd('todo');

function asincrona(){
    return new Promise((resolve)=>{
        setTimeout(function(){
            console.log('termina el proceso asincrono');
            resolve();
        },200);
    })
}
