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

// export const searchHero = ( id ) => {
//     const hero = heroes[id];

//     return new Promise( ( res, reject ) => {
//         if ( hero ) {
//             res( hero );
//         } else {
//             reject( `There is no hero with the ${ id } id` );
//         }
//     });
// }

export const searchHero = ( id ) => {
    const hero = heroes[id];

    return new Promise( ( res, reject ) => {
        if ( hero ) {
            setTimeout(() => res( hero ), 1000);
        } else {
            reject( `There is no hero with the ${ id } id` );
        }
    });
}

export const searchHeroAsync = async ( id ) => {
    const hero = heroes[id];

    if ( hero ) {
        return hero;
    } else {
        throw `There is no hero with the ${ id } id`;
    }
}


const slowPromise = new Promise(( res, reject ) => {
    setTimeout(() => res('Slow Promise'), 2000);
});

const mediumPromise = new Promise(( res, reject ) => {
    setTimeout(() => res('Medium Promise'), 1500);
})

const fastPromise = new Promise(( res, reject ) => {
    setTimeout(() => res('Fast Promise'), 1000);
})

export{
    fastPromise,
    mediumPromise,
    slowPromise
}
