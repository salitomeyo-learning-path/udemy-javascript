const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

while ( i < carros.length ) {
    console.log(carros[i]);
    i++;
}

i = 0;

while ( carros[i] ) {
    console.log(carros[i]);
    i++;
}

i = 0;

while ( carros[i] ) {
    if ( i === 1) {
        i++;
        continue;
    }

    console.log(carros[i]);
    i++;
}

i = 0;

console.warn('Do while');

do {
    console.log( carros[i] );
    i++;
} while ( carros[i] );
