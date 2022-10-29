const anotherFunction = () => {
    return new Promise((resolve,reject)=>{
        if (false) {
            resolve ("Eureka");            
        }else{
            reject ("Uups");
        }
    });
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err+" este es el catch"));