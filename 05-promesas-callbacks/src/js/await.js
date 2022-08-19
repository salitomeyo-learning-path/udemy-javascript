import { searchHeroAsync, searchHero } from "./promises";

const heroesIds = ['capi', 'iron', 'spider'];
const heroesPromises = heroesIds.map( searchHero );


// export const getHeroesArr = async() => {
//     const heroesArr = [];

//     for ( const heroId of heroesIds ) {
//         const hero = await searchHeroAsync( heroId );
//         heroesArr.push( hero );

//     }
//     return heroesArr;
// }

export const getHeroesArr = async() => {
    return await Promise.all( heroesIds.map( searchHero ));
}

export const getHeroAwait = async( id ) => {
    try{
        const heroe = await searchHeroAsync(id);
        return heroe;
    } catch ( err ) {
        throw err
    }
}

export const heroesCycle = async() => {
    console.time('HeroesCycle');

    for await( const hero of heroesPromises ){
        console.log( hero );
    }

    // const heroes = await Promise.all( heroesPromises );
    // heroes.forEach( hero => console.log(hero) );

    console.timeEnd('HeroesCycle');
}

export const heroIfAwait = async(id) => {
    if ( (await searchHeroAsync( id )).name === 'Spiderman' ) {
        console.log('Is the youngest');
    } else {
        console.log('Old man');
    }
}


