const heroes = ['batman', 'superman', 'wonder woman', 'aquaman'];

console.warn('For tradicional');
for( let i = 0; heroes[i]; i++) {
    console.log(heroes[i]);
}


console.warn('For in');
for (let i in heroes ){
    console.log(heroes[i]);
}

console.warn('For of');
for(let heroe of heroes){
    console.log( heroe );
}