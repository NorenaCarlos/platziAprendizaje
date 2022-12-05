function saludo(nombre,miCallback){
    setTimeout(function(){
        console.log("Hola " + nombre +" ¿Qué tal, cómo te va?");
        miCallback(nombre);
    },1700)
}
function adios(nombre,callback){
    setTimeout(function () {
        console.log('Adios, ', nombre);
        callback();
    },1000);
}

function hablar(nombre,callbackHablar){
    setTimeout(function(){
        console.log("bla bla bla bla");
        callbackHablar(nombre);
    },500)
}

function conversar(nombre, veces, callback){
    if(veces>0){
        hablar(nombre,function(){
            conversar(nombre,--veces,callback);
        });
    }else{
        adios(nombre,callback)
    }
}

console.log("Iniciando proceso...");
saludo("Carlos", function(nombre){
    conversar(nombre,4,function(){
        console.log("Terminando proceso...")
    });
});
// SE e convierte en un codigo dificil de entender y de mantener,aunque funciona
//se le denomina callbackhell
// saludo("Carlos",function(nombre){
//     hablar(nombre,function(nombre){
//         hablar(nombre,function(nombre){
//             hablar(nombre,function(nombre){
//                 adios(nombre, function(){
//                     console.log("Terminando proceso..")
//                 });
//             });
//         });
//     });
// });
