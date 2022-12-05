function saludo(nombre){
    return new Promise(function(resolve, reject){    
        setTimeout(function(){
            console.log("Hola " + nombre +" ¿Qué tal?, ¿Cómo te va?");
            resolve(nombre);
        },1000)
    });
}
function adios(nombre){
    return new Promise((resolve,reject)=>{
        setTimeout(function () {
            console.log('Adios, ', nombre);
            resolve(nombre);
        },1000);
    })
}

function hablar(nombre,callbackablar){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            console.log("bla bla bla bla");
            reject("Ha habido un error en la funcion hablar");
        },1000)
    })
    
}
console.log("Proceso iniciado")
saludo("Carlos")
    .then(hablar)
    .then(adios)
    .then((nombre)=>{
        console.log("Proceso terminado...")
    })
    .catch((error)=>{
        console.error(error);
    })