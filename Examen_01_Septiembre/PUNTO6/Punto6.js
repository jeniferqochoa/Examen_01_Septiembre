//Crear una función que haga la cuenta regresiva y que tome como 
//parámetro numeroInicial recuerde utilizar en este caso el metodo push()
//
//Push(): nos permite añadir un nuevo elemento al final de un array. Al igual 
//que otros métodos para manipular arrays como map y filter

function cuentaRegresiva(numeroInicial){

    cuenta = [];

    for (let i = numeroInicial; i > 0 ; i--) {
        cuenta.push(i)
        
    }
    return cuenta;
}

const numeroInicial = 4

console.log(cuentaRegresiva(numeroInicial))