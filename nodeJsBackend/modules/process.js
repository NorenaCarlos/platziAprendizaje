process.on('beforeExit',()=>{
    console.log("El proceso va terminar");
});

process.on('exit',()=>{
    console.log("El proceso acabó");
});

process.on('uncaughtException',(err,origen)=>{
    console.log("Vaya se nos ha olvidado capturar un error");
    console.log(err);
});

funcionQuenoExiste()

console.log("Esto si el error no se recoge, no sale");