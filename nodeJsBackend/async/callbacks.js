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
console.log("Iniciando proceso...");
saludo("Carlos",function(nombre){
    adios(nombre, function(){
        console.log("Terminando proceso..")
    });
});

// hola("Carlos",function(){});
// adios("Andrés",function(){});