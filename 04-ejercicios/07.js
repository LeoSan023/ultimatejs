/*
    Crear algoritmo que devuelva el precio del producto
    más el impuesto
*/

function precioMasImpuesto(precio, impuesto) {
    result = precio * (1 + (impuesto / 100));
    return result;
}

resultado = precioMasImpuesto(19.90, 15);
console.log(resultado);