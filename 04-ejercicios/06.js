/*
    Algoritmo que devuelva cantidad de números positivios
    de un array
*/

let arreglo = [2, 5, 7, -15, -5, -100, -55];

function cuantosPositivos(arr) {
    let cant = 0;
    for ( numero of arr){
        if (numero > 0) {
            cant++;
        }
    }
    return cant;
}

let resultado = cuantosPositivos(arreglo);
console.log(resultado);