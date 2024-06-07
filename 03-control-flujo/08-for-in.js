let user = {
    id: 1,
    name: 'Chanchito feliz',
    age: 25,
};
        
for (prop in user) {
    console.log(prop,':', user[prop]);
}

let animales =['Chanchito feliz', 'Dragon', 'Kanguro'];
for (indice in animales){ //no utilizar para iterar un arreglo, MEJOR USAR : FOR OF
    console.log(indice, animales[indice]);
}