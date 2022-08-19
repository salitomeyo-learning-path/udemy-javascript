import './styles.css';
import { fastPromise, mediumPromise, slowPromise } from './js/promises';
import { searchHero, searchHeroAsync } from './js/promises';


// slowPromise.then( console.log );
// mediumPromise.then( console.log );
// fastPromise.then( console.log );

Promise.race([ slowPromise, mediumPromise, fastPromise ])
.then( console.log )
.catch( console.warn );

searchHero('capi')
    .then( hero => console.log( hero ) )
    .catch( console.warn );


searchHeroAsync('iron')
    .then( hero => console.log( hero ) )
    .catch( console.warn );

