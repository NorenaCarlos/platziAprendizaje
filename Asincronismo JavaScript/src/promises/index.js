const promise = new Promise(function (resolve,reject){
    resolve('hey!!')
})

const cows = 9;

const countCows = new Promise(function(resolve,reject){
    if(cows>10){
        resolve(`We have ${cows} cows in the farm`);
    } else {
        reject('There is no enought cows in the farm');
    }
})

countCows.then((resolve)=>{
    console.log(resolve);
}).catch((reject)=>console.log(reject)).finally(()=>console.log("Finish the promise"));