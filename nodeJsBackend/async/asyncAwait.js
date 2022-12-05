async function saludo(nombre){
    return new Promise(function(resolve, reject){    
        setTimeout(function(){
            console.log("Hola " + nombre +" ¿Qué tal?, ¿Cómo te va?");
            resolve(nombre);
        },1000);
    });
}
function adios(nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            console.log('Adios, ', nombre);
            resolve(nombre);
        },1000);
    });
}

async function hablar(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log("bla bla bla bla");
            resolve("Ha habido un error en la funcion hablar");
        },1000);
    });
    
}
async function main(){
    let nombre = await saludo("Carlos");
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre)
    console.log("Proceso terminado... asincrona")
}
console.log("Proceso iniciado")
main();
console.log("Proceso terminado...")