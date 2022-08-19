const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negacion');
console.log( !true );
console.log( !regresaFalse );

console.warn('And');
console.log( true && true );
console.log( regresaTrue && !regresaFalse );
console.log( regresaFalse && regresaTrue ); //Nunca ejecuta el regresaTrue porque ya sabe que no cumple el if

console.warn('OR');
console.log( true || true );
console.log( regresaTrue || !regresaFalse ); // Nunca ejecuta el regresaFalse porque ya se cumple la condicion del if
console.log( regresaFalse || regresaTrue ); 

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola mundo' && 150;
const a2 = false && 'Hola mundo' && 150;
const a3 = true && 'Hola mundo';
const a4 = true && 'hola' && soyFalse && 'Mundo';
const a5 = soyFalse || 'Ya no soy false';
const a6 = soyFalse || soyNull || soyUndefined || "buuu";
const a7 = soyFalse || soyNull || soyUndefined || "buuu" || true;

console.log({ a1, a2, a3, a4, a5, a6 });


