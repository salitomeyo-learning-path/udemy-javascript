
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

const spiderman = new Person('Peter Parker', 'Spiderman', 'Your friendly neighbour');
const ironman = new Person('Tony Stark', 'Ironman', 'I am ironman');
console.log(spiderman);
console.log(ironman);

ironman.quienSoy();
spiderman.miFrase();

spiderman.setFood = 'Arracacha';
spiderman.enemy = 'Green Goblin';
console.log(spiderman);

console.log(spiderman.getFood);

// Person._count = 10;
console.log( 'Static count', Person._count );
console.log( Person.getCount );
Person.mensaje();


Person.externalProperty = 'Hola mundo';
console.log( Person.externalProperty );
console.log( Person );
