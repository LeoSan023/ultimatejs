// Crear algoritmo que devuelva, dado un arreglo, los numeros
// menor y mayor del mismo

let arreglo = [2, 5, 7, 15, -5, -100, 55, -200, 560];

function getMenorMayor(arr){    
    let mayor = arr[0];
    let menor = arr[0];

    for ( numero of arr){
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? menor : numero;
    }

    return [menor, mayor];
}

let numerosOrdenados = getMenorMayor(arreglo);
console.log (numerosOrdenados);