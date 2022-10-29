//aplana el array tantos niveles como se pasa por parametro
const array=[1,1,1,1,3,4,7,8,8,9,[4,6,7,8,10,[3,4,5,6,6,8]]];
console.log(array.flat(5));

// flat map 
const array2 = [1,2,3,4,5,6,7,8];
console.log(array2.flatMap(v=>[v,v*2]))