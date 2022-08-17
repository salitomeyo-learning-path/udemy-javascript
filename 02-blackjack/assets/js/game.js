// 2C = Clubs
// 2D = Diamonds
// 2H = Hearts
// 2S = Spades

let deck = [];
const cartSymbols = ['C','D','H','S'];
const otherCards = ['A','J','Q','K'];

// Selectors
const computerCards = document.getElementById('computador-cartas');
const playerCards = document.getElementById('jugador-cartas');
const createDeckBtn = document.getElementById('create-deck-btn');
const drawCardBtn = document.getElementById('draw-card-btn');
const stopGameBtn = document.getElementById('stop-game-btn');
const pointsElements = document.querySelectorAll('small');


let playerPoints = 0,
    computerPoints = 0;

const createDeck = () => {
    deck = [];
    for( let cartSymbol of cartSymbols) {
        for(let i = 2; i <= 10; i++ ) {
            deck.push( i + cartSymbol );
        }
        for( let otherCard of otherCards ) {
            deck.push( otherCard + cartSymbol );
        }
    }

    deck = _.shuffle( deck );
}

const takeCard = () => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    return deck.pop();
}

const getCardValue = ( card ) => {
    const value = card.substring(0, card.length-1);
    return ( !isNaN(value) ) ? value*1 :
           ( value === 'A' ) ? 11 : 10;
}

const getCardImg = ( card ) => {
    const img = document.createElement('img');
    img.classList.add('carta');
    img.src = `assets/cartas/${card}.png`

    return img;
}

const computerPlayerLogic = () => {
    do {
        const card = takeCard();
        computerPoints = computerPoints + getCardValue(card);
        pointsElements[1].innerText = computerPoints;
        computerCards.append( getCardImg(card) );

        if ( playerPoints > 21 ) break;
    } while( playerPoints > computerPoints );

    let message = ( playerPoints > 21 ) ? 'Sorry, you went over 21, you lose' :
                  ( playerPoints === computerPoints ) ? 'It was a tie, nobody wins':
                  ( computerPoints > playerPoints && computerPoints <= 21 ) ? 'Sorry, the computer was closer to 21, you lose': 'Congratulations! You Won!';
    
    // alert(message);
    console.warn(message);
}


createDeckBtn.addEventListener('click', () => {
    playerCards.innerHTML = '';
    computerCards.innerHTML = '';
    pointsElements[0].innerText = 0;
    pointsElements[1].innerText = 0;
    playerPoints = 0;
    computerPoints = 0;
    createDeck();
    drawCardBtn.disabled = false;
    stopGameBtn.disabled = false;
})

drawCardBtn.addEventListener('click', () => {
    const card = takeCard();
    playerPoints = playerPoints + getCardValue(card);
    pointsElements[0].innerText = playerPoints;
    playerCards.append( getCardImg(card) );

    if ( playerPoints > 21) {
        drawCardBtn.disabled = true;
    } else if ( playerPoints === 21 ) {
        computerPlayerLogic();
    }
})

stopGameBtn.addEventListener('click', () => {
    drawCardBtn.disabled = true;
    stopGameBtn.disabled = true;
    computerPlayerLogic();
})
