const elMayor = (a, b) => ( a > b ) ? a : b; 

const tieneMembresia = ( miembro ) => (miembro) ? '2 Dolares' : '10 Dolares';

console.log( elMayor(20, 344) );
console.log( tieneMembresia(true) );

const amigo = false;
const amigosArr = [
    'Peter',
    'Tony',
    amigo ? 'Thor' : 'Loki'
]

console.log( amigosArr );

const nota = 65;
const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B' :
              nota >= 70 ? 'c+' :
              nota >= 60 ? 'c' : 'F' ;

console.log({ grado });
