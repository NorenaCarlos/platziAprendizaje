//antes
function newUserOld(user,age,country,uId) {
    return {
        user: user,
        age: age,
        country: country,
        id: uId
    }
    
}
console.log(newUserOld("Carlos",25,"COL",1041204630))


//Ahora
function newUser(user,age,country,uId) {
    return {
        user,age,country,id:uId
    }
}

console.log(newUser("Carlos",25,"COL",1041204630))