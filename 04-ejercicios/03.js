// Indice validar que no sea menor a cero y que el elemento exista en el array

function getByIdx(arr, idx) {
    let result;
    
    if (idx  < 0 || arr.length <= idx) {
        result = 'indice inválido';
    } else {
        result = arr[idx];
    }

    return result;
}

// let felinos  = ['Leon', 'Tigre', 'Leopardo'];
// let resultado = getByIdx(felinos, 0)
let resultado = getByIdx(['Leon', 'Tigre', 'Leopardo','Ligre'], 3)
console.log(resultado);