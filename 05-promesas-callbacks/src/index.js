import './styles.css';
import { getHeroesArr, getHeroAwait, heroesCycle, heroIfAwait } from './js/await';

getHeroesArr().then( console.table );

getHeroAwait('capi2')
    .then( console.log )
    .catch( console.warn );


heroesCycle();
heroIfAwait('spider');

