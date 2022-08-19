import '../css/components.css';
// import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = ( name ) => {
    console.log('Creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${ name }`;
    document.body.append( h1 );

    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append( img );
}