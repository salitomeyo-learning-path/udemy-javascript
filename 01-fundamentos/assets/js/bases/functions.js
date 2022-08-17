function saludar() {
    console.log( arguments );
    console.log('Hola mundo');
}


function saludarUser( nombre ) {
    console.log('Hola', nombre);
}


//anonima
const saludar2 = function() {
    console.log('Hola mundo');
}

const saludarUser2 = function( nombre ) {
    console.log('Hola', nombre);
}

//Funcion flecha
const saludarFlecha = () => {
    console.log('Hola flecha');
    return [1, 2];
}

const saludarFlechaUser = ( nombre ) => {
    console.log('Hola flecha', nombre);
}

saludar();
saludar2();

saludarUser( 'Salome' );
saludarUser2( 'Salome' );

saludar( 'salome', 30, true, 'california' );


saludarFlecha();
saludarFlechaUser( 'salome' );

console.log( saludar() );
console.log( saludarFlecha() );


function sumar( a, b ) {
    return a + b;
}

const multiplicar = (a, b) => {
    return a*b;
}

const dividir = (a, b) => a / b;

console.log( sumar(1,2) );
console.log( multiplicar(4, 6) );
console.log( dividir(6, 2) );

function getAleatorio() {
    return Math.random();
}

const getRandom = () => Math.random();

console.log( getAleatorio() );
console.log( getRandom() );
