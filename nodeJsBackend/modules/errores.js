function otraFuncion(){
    return seRompe();
}

function seRompe() {
    return 3+z;
}

function asincrona(cb) {
    setTimeout(function(){
        try{
            return 3+zM
        }catch(err){
            console.error("Algo a salido mal");
            cb(err);
        }
    },500); 
}

try{
    //otraFuncion();
    asincrona((err)=>{
        console.log(err);
    });
} catch(err){
    console.error("vaya algo se ha roto");
    console.error(err.message);
    console.log("No pasa nada lo hemos capturado");
}
console.log("Segimos despues del erro");