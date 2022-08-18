const sal = {
    name: 'Salome',
    age: 22,
    imprimir() {
        console.log(`Nombre: ${ sal.name }`) //works but is a really bad practice
    }
}

const jad = {
    name: 'Jade',
    age: 10,
    imprimir() {
        console.log(`Nombre: ${ this.name }`)
    }
}

function Persona( name, age ) {
    console.log('Se ejecuto esta linea');

    this.name = name;
    this.age = age

    this.imprimir = function() {
        console.log(`Nombre: ${ this.name } - edad: ${ this.age }`)
    }
}

const maria = new Persona('Maria', 43);
const melissa = new Persona('Melissa', 324);
console.log( maria );

melissa.imprimir();

