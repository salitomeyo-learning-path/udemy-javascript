const module = (() => {
    'use strict'

    let deck          = [],
        playersPoints = [];
    const cartSymbols = ['C','D','H','S'],
          otherCards  = ['A','J','Q','K'];

    // Selectors
    const computerCards  = document.getElementById('computador-cartas'),
          playerCards    = document.getElementById('jugador-cartas'),
          createDeckBtn  = document.getElementById('create-deck-btn'),
          drawCardBtn    = document.getElementById('draw-card-btn'),
          stopGameBtn    = document.getElementById('stop-game-btn'),
          pointsElements = document.querySelectorAll('small');   

    const startGame = ( numOfPlayers ) => {
        createDeck();
        playerCards.innerHTML = '';
        computerCards.innerHTML = '';
        pointsElements.forEach( pointElement => pointElement.innerText = 0 );
        disableButtons( false );
        playersPoints = Array(numOfPlayers+1).fill(0);
    }

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

    const updatePointCounter = ( turn, card ) => {
        playersPoints[turn] = playersPoints[turn] + getCardValue(card);
        pointsElements[turn].innerText = playersPoints[turn];
    }

    const disableButtons = ( boolean ) => {
        drawCardBtn.disabled = boolean;
        stopGameBtn.disabled = boolean;
    }

    const computerPlayerLogic = ( minimumPoints ) => {
        do {
            const card = takeCard();
            updatePointCounter( playersPoints.length - 1, card );
            computerCards.append( getCardImg(card) );

            if ( minimumPoints > 21 ) break;
        } while( minimumPoints > playersPoints[playersPoints.length - 1] );

        endGame();
    }

    const endGame = () => {
        let computerPoints = playersPoints[playersPoints.length - 1];
        let message = ( playersPoints[0] > 21 ) ? 'Sorry, you went over 21, you lose' :
                    ( playersPoints[0] === computerPoints ) ? 'It was a tie, nobody wins':
                    ( computerPoints > playersPoints[0] && computerPoints <= 21 ) ? 'Sorry, the computer was closer to 21, you lose': 'Congratulations! You Won!';
        console.warn(message);
    }

    createDeckBtn.addEventListener('click', () => {
        startGame(1);
    })

    drawCardBtn.addEventListener('click', () => {
        const card = takeCard();
        updatePointCounter(0, card);
        playerCards.append( getCardImg(card) );
        let minimumPoints = 0;

        if ( (playersPoints[0] > 21) || (playersPoints[0] === 21) ) {
            minimumPoints = Math.max( ...playersPoints );
            disableButtons( true );
            computerPlayerLogic( minimumPoints );
        }
    })

    stopGameBtn.addEventListener('click', () => {
        let minimumPoints = Math.max( ...playersPoints );
        disableButtons( true );
        computerPlayerLogic( minimumPoints );
    })

    return {
        newGame: startGame
    };
})();