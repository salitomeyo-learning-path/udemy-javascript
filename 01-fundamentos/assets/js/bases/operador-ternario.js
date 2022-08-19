const dia = 0;
const hora = 10;

let horaApertura;
let mensaje;

horaApertura = ( [0,6].includes( dia ) )  ? 11 : 9;
mensaje = ( hora <= horaApertura ) ? 'Estamos abiertos' : `Estamos cerrados, hoy abrimos a las ${ horaApertura }`;


console.log({ horaApertura, mensaje })

