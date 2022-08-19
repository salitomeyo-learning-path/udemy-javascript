const character = {
    name: 'Tony Stark',
    codeName: 'Iron-Man',
    isAlive: false,
    age: 40,
    coordinates: {
        lat: 34.321,
        lng: -434.21
    },
    suits: ['Mark I', 'Mark V', 'Hulkbooster'],
    direction: {
        zip: '10880, 90265',
        ubication: 'Malibu, California'
    },
    'last-movie': 'infinity war',
    first_movie: 'Iron-man'
};


console.log( character );
console.log( 'Name', character.name );
console.log( 'Name', character['name'] );
console.log( 'Age', character.age );

console.log( 'Coords', character.coordinates );
console.log( 'Lat', character.coordinates.lat );

console.log( 'No. Suits', character.suits.length );
console.log( 'Last suit', character.suits[character.suits.length - 1] );

const x = 'isAlive';
console.log('Is alive ', character[x] );

console.log('Last movie', character['last-movie'] );

delete character.age;
console.log( character );

character.isMarried = true;

const entriesPairs = Object.entries( character );
console.log( entriesPairs );

//Volviendo las propiedades del personaje inmutables

Object.freeze( character );
character.money = 1020120102;
character.isAlive = true;

character.direction.ubication = 'Paris';
console.log( character );

const properties = Object.getOwnPropertyNames( character );
const values = Object.values( character );
console.log( properties, values );


