// Crear una función que obtenga la cantidad de x elemento de una matriz

const elemento = '2'

function cantidad(matriz, elemento){
    let cont = 0;

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz.length; j++){
            if(matriz[i][j] == elemento){
                cont++
            }
        }
    }
    return cont
}


const matriz1 = [
    ['2', '1', '1', '2'],
    ['2', '2'],
    ['1', '2', '1'],
    ['2', '2', '2', '1']
]



console.log(matriz1);
console.log(cantidad(matriz1,elemento));