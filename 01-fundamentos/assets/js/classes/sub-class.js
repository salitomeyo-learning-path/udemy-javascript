
class Person {

    static _count = 0;
    static get getCount() {
        return Person._count;
    }

    static mensaje() {
        console.log( `La cantidad de instancias de la clase Person son: ${ Person._count }`)
    }

    name = '';
    code = '';
    phrase = '';
    food = '';

    constructor(name = 'No name', code = '-1', phrase = 'No phrase') {
        this.name = name;
        this.code = code;
        this.phrase = phrase;

        Person._count++;
    }

    set setFood( food ) {
        this.food = food;
    }

    get getFood() {
        return this.food;
    }

    quienSoy() {
        console.log(`I am ${ this.name } - and my identity is: ${ this.code }`)
    }

    miFrase() {
        console.log(`${ this.code } says: ${ this.phrase }`)
    }
}

class Heroe extends Person {
    clan = 'sin clan';

    constructor(name, code, phrase, clan) {
        super( name, code, phrase );
        this.clan = clan;
    }

    quienSoy() {
        console.log(`I am ${ this.code } from the ${ this.clan }`);
        super.quienSoy();
    }
}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Your friendly neighbour', 'Avengers');
console.log(spiderman);


spiderman.quienSoy();
