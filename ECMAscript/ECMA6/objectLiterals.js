function newUser(user,age,country,uId) {
    return {
        user,age,country,id:uId
    }
}

console.log(newUser("Carlos",25,"COL",1041204630))