let i = 0;

while (i < 6) {
    i++;
    if (i === 2) {
        continue; //lo reenvia al inicio del loop
    }

    if (i === 4){
        break;
    }

    console.log(i);
}