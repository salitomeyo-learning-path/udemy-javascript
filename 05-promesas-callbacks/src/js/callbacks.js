const heroes = {
    capi: {
        name: 'Captain America',
        power: 'take shots without dying'
    },
    iron: {
        name: 'Ironman',
        power: 'Astonishing amount of money'
    },
    spider: {
        name: 'Spiderman',
        power: 'Climb walls, shoot web'
    }
}

export const searchHero = ( id, callback ) => {
    const hero = heroes[id];

    if ( hero ) {
        callback( null, hero );
    } else {
        callback(`There is no hero with the ${ id } id`);
    }

    // callback( hero );
}
