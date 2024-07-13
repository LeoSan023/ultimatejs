function Usuario(nombre){
    this.nombre = nombre;
}

console.log(Usuario.name);      //retona nombre de la funcion
console.log(Usuario.length);    //retona cantidad de argumentos de la funcion

const U = Usuario
let user = new U('Nicolas');

console.log(user);

function of(Fn, arg) {
    return new Fn(arg);
}

let user1 = of(Usuario, 'Chanchito');
console.log(user1);

function returned() {
    return function() {
        console.log('Hola mundo');
    }
}

let saludo = returned();
saludo();