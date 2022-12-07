function asincrona(callback){
    setTimeout(function() {
        try{
            let a = 3+z;
            callback(null,a);
        }catch(e){
            callback(e);
        }
    })
}
asincrona(function(error,dato){
    if(error){
        console.error('tenemos un error');
        console.error(error);
        return false;
        // throw error;
    }
    console.log('todo ha ido bien, mi data es: ', dato);
})