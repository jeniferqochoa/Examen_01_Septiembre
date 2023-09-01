//Crear función que sume dos arreglos y que el resultado se agregue en un 
//nuevo arreglo

function sumaDeArreglos (array1, array2){
    let nArray = []
    for (let i=0; i<array1.length; i++){
        nArray.push(array1[i]+array2[i])
    }
    return nArray
}
const array1 = [1, 2, 3]
const array2 = [1, 2, 3]
console.log(sumaDeArreglos(array1, array2))