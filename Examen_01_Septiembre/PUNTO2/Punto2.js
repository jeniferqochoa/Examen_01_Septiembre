// Crear función que identifique por medio de false o true si una matriz es 
//cuadrada y que tome como parámetro matriz
//
//En caso de que la matriz no sea cuadrada debe arrojar false
//En caso de que la matriz sea cuadrada debe arrojar true

function MaCuadrada(matriz){
    let Matriz = matriz.length
 for(let i=0; i<Matriz; i++){
        if(matriz[i].length!==Matriz){
         return false}
    }
    return true
} 
 

const matriz1 = [ 
    [3, 4, 5, 8],
    [44, 23, 13, 60],
    [16, 56]
    [45, 70, 30, 10]    
]
const matriz2=[
    [6,7,8],
    [6,9,5],
    [1,2,3]
]
console.log(matriz1)
console.log(MaCuadrada(matriz1)) // false
console.log(MaCuadrada(matriz2)) // true