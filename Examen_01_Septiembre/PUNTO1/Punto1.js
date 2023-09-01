//Crear una función que obtenga número mayor de una matriz 4x4 y que 
//tome como parámetro matriz

function MayorNume(matriz){
    let numeroMayor = matriz[0][0]
    for(let i = 0; i<matriz.length; i++){
    for(let j = 0; j<matriz[i].length; j++){
        if(matriz[i][j]>numeroMayor){
            numeroMayor = matriz[i][j]
        }
    }

    return numeroMayor;
}}

const matriz = [
    [1,4,18,7],
    [9,5,3,10],
    [13,4,3,8],
    [16,7,8,2],
]

const resultado = MayorNume(matriz)

console.log(resultado);