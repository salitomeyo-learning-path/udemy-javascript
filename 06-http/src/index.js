// import { getJoke, getUsers } from "./js/http-provider";
// import { init } from './js/jokes-page';
// import { init } from './js/usuarios-page';

// console.log(getJoke());

// init();

import * as CRUD from "./js/crud-provider";
import { init } from './js/files-page';

CRUD.getUser( 2 ).then( console.log );

CRUD.createUser({
    name: 'Salome',
    job: 'Software Developer'
}).then( console.log );

CRUD.updateUser({
    "name": "morpheus",
    "job": "zion resident"
}).then( console.log );

CRUD.deleteUser( 2 ).then( console.log );


init();