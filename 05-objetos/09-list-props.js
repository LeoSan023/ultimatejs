const punto = {
    x: 10,
    y: 15,
    dibujar() {
        console.log('Dibujando');
    }
};

// delete punto.dibujar;

// if ('dibujar' in punto) {
//     punto.dibujar();
// }

// let keys = Object.keys(punto); //Sería exactamente lo mismo
// console.log(Object.keys(punto));

// for (llave of Object.keys(punto)) {
//     console.log(llave, punto[llave]);
// }

// for (entry of Object.entries(punto)) { //Lo mismo que lo anterior pero con el metodo entry()
//     console.log(entry);
// }

for (llave in punto) { //manera más reciente para hacerlo
    console.log(llave, punto[llave]);
}