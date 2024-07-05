/*
    Crear array de longitud N, y que sus elementos sean numeros de 1 hasta N.
*/

let longitud = 7;

function crearArray(n) {
    let arr = [];

    if (n > 0) {
        for (i = 0; i < n; i++){
            arr[i] = i + 1;
        }        
    }
    
    return arr;
}

let resultado = crearArray(longitud);

console.log(resultado);