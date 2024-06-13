// Algoritmo que escribe los numeros impares del 0 al 10

function numerosPares() {
    for(i = 1; i < 11; i++){
        if (i % 2 != 0){
            console.log('Número impar:', i);
        }
    }
}

numerosPares();