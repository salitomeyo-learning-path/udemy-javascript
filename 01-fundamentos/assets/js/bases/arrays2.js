let games = ['Zelda', 'Mario', 'Minecraft', 'Terraria'];
console.log('Longitud: ', games.length );

let first = games[0];
let last = games[games.length - 1];

console.log({ first, last });

games.forEach( (game, index, arr) => {
    console.log({ game, index, arr });
})

let newLongitud = games.push( 'Bomberman' );
console.log({ newLongitud, games });

newLongitud = games.unshift('Fire Emblem');
console.log({ newLongitud, games });

let erasedGame = games.pop();
console.log({ erasedGame, games });

let pos = 1;

let erasedGames = games.splice( pos, 2 );
console.log({ erasedGames, games });

let minecraftIndex = games.indexOf('Minecraft');
console.log({ minecraftIndex });

let bombermanIndex = games.indexOf('Bomberman');
console.log({ bombermanIndex });



