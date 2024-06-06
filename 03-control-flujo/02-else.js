let edad = 10;
let result = '';

if (edad >= 18){
    result = 'es mayor';
} else if (edad > 13){
    result = 'necesita entrar acompañado porque no es mayor';
    
} else {
    result = 'es MENOR';
}

console.log('El usuario', result, 'de edad');