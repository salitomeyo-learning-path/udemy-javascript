import './styles.css';
import { searchHero as searchHeroCallback } from './js/callbacks';
import { searchHero } from './js/promises';

const heroId = 'capi';
const heroId2 = 'spider';


searchHeroCallback( heroId, ( err, hero ) => {
    if ( err ) {
        console.log(err);
    } else {
        searchHeroCallback( heroId2, ( err, hero2 ) => {
            if ( err ) {
                console.log(err);
            } else {
                console.log(`Sending ${ hero } and ${ hero2 } to mission`);
            }
        } )
        // console.log(`Sending ${ hero.name } to the mision`);
    }
}) 

// searchHero( heroId ).then( hero => {
//     searchHero( heroId2 ).then( hero2 => {
//         console.log(`Sending ${ hero } and ${ hero2 } to mission`);
//     })
//     // console.log(`Sending ${ hero.name } to the mision`);
// })

Promise.all([ searchHero( heroId ), searchHero( heroId2 ) ]).then( ( heroes ) => {
    console.log('Promise.all', heroes );
}).catch( err => {
    alert(err);
}).finally(() => {
    console.log('Promise.all ended');
})

console.log('End of program');