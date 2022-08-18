class Person {
    static porObjeto({ name, lastname, country }){
        return new Person( name, lastname, country );
    }


    constructor ( name, lastname, country ){
        this.name = name;
        this.lastname = lastname;
        this.country = country;
    }

    getInfo() {
        console.log(`info: ${ this.name }, ${ this.lastname }, ${ this.country }`);
    }
}

const nombre1 = 'Melissa',
      lastname1 = 'FLores',
      country1 = 'Honduras';

const sal = {
    name: 'Salome',
    lastname: 'Aristizabal',
    country: 'Colombia'
}

const persona1 = new Person(nombre1, lastname1, country1)
const persona2 = Person.porObjeto(sal);

persona1.getInfo();
persona2.getInfo();

