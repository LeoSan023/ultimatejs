function crearUsuario(email, name) {
    return {
        email,
        name,        
        activo: true,
        recuperarClave: function (){
            console.log('Recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Leonardo', 'leonardosantana1997@gmail.com');
let user2 = crearUsuario('Daniel', 'daniel@gmail.com');

console.log(user1,user2);