// function crearPersona ( nombre, apellido ) {
//     return { 
//         nombre: nombre, 
//         apellido: apellido }
// }

// function crearPersona ( nombre, apellido ) {
//     return { nombre, apellido }
// }

// const crearPersona = ( nombre, apellido ) => {
//     return { nombre, apellido }
// }

const crearPersona = ( nombre, apellido ) => ({ nombre, apellido });

const persona = crearPersona('Salome', 'Aristizabal')
console.log( persona );

function imprimeArgumentos() {
    console.log( arguments )
}

const imprimeArgumentos2 = ( edad, ...args ) => {
    return { edad, args }
}

const imprimeArgumentos3 = ( edad, ...args ) => {
    return args 
}

imprimeArgumentos( 10, true, false, 'Salome');
const argumentos = imprimeArgumentos2( 10, true, false, 'Salome');
console.log(argumentos)

const [ vivo, casado, nombre] = imprimeArgumentos3( 10, true, false, 'Salome');
console.log({ vivo, nombre });

const { apellido: nuevoApellido } = crearPersona('Tony', 'Stark');
console.log({ nuevoApellido });

const tony = {
    name: 'Tony Stark',
    codeName: 'Iron-Man',
    isAlive: false,
    age: 40,
    suits: ['Mark I', 'Mark V', 'Hulkbooster'],
};

const imprimePropiedades = ({ name, codeName, isAlive, age=15, suits}) => {
    console.log({name});
    console.log({codeName});
    console.log({isAlive});
    console.log({age});
    console.log({suits});
}


