let a = {prop : 1};

function suma(n) {
    n.prop++;
}

suma(a);
console.log(a);

/*
let a =  {};
let b =  a;

b.prop = 1;
console.log(a, b);
*/

/*  Los tipos de datos primitivos se copian cuando los asignamos a otras variables
    Los tipos de datos de referencia se crea una referencia
        objetos
        arrays
        funciones
*/