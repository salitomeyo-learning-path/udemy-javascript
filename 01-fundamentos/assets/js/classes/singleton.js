class Singleton {
    static instancia;
    name = '';

    constructor ( name = '' ) {
        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }
        
        Singleton.instancia = this;
        this.name = name;
    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');

console.log(instancia1);
console.log(instancia2);

