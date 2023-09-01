//Crear función que filtre números mayores o iguales a 6 y que tome como 
//parámetro un array
//
//Filter(): Consiste en filtrar uno o más elementos (un subconjunto) de una 
//colección más grande de elementos (un superconjunto) basándose en 
//alguna condición/preferencia

const array = [2,4,7,8,9,6,7]

const arrayFiltrado = array.filter(filtrarNumeros);

function filtrarNumeros(array){
    return array >= 6;
}

console.log(array)
console.log(arrayFiltrado)