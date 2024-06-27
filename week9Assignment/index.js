//below is the class for each individual card including the suit and rank (value)
class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }

// below is a method for finding out the numeric value of the card's rank.
    getRank() {
        const rank = {
            '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14
        };
        return rank[this.rank];
    }
}

//below is the class for the whole deck of cards
class Deck {
    constructor() {
        this.cards = [];
        const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        
    //below puts 52 cards in the deck
        for (let suit of suits) {
            for (let rank of ranks) {
                this.cards.push(new Card(suit, rank));
            }
        }
    }

//below is a method for shuffling the deck 
    shuffle() {
        for(let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

//below is a method for dealing half of the cards to a player, and the other half to the other player
    deal() {
        return this.cards.splice(0, 26); 
    }
}

//below is the class for the individual players
class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
    }

//below is a method for playing the top card from a player's hand
    playCard() {
        return this.hand.shift();
    }

//below is the method for counting the score of each player 
    incrementScore() {
        this.score++;
    }
}

//below is the class for the entire game build; 2 players and a new deck of cards
class Game {
    constructor(player1Name, player2Name) {
        this.player1 = new Player(player1Name);
        this.player2 = new Player(player2Name);
        this.deck = new Deck();
    }

//below is the method to start the game by shuffling and dealing to each player 
    startGame() {
        this.deck.shuffle();
        this.player1.hand = this.deck.deal();
        this.player2.hand = this.deck.deal(); 
    }

//below is the method to for each player to show their card and determine who gets the points based on the rank value
    playRound() {
        const card1 = this.player1.playCard();
        const card2 = this.player2.playCard();

        if (card1.getRank() > card2.getRank()) {
            this.player1.incrementScore();
        } else if (card2.getRank() > card1.getRank()) {
            this.player2.incrementScore();
        }
    }
//below is a method to play the game until all the cards are played
    playGame() {
        this.startGame();
        while (this.player1.hand.length > 0 && this.player2.hand.length >0) {
            this.playRound();
        }
        this.displayScore();
        this.determineWinner();
    }

//below is the alerts (I originally had these as console.logs and realized that's not how I want to view the game) to display each players score
    displayScore() {
        alert(`${this.player1.name} Score: ${this.player1.score}`);
        alert(`${this.player2.name} Score: ${this.player2.score}`); 
    }

//below determines the winner and shows the alerts for which player wins or if there's a tie
    determineWinner() {
        if (this.player1.score > this.player2.score) {
            alert(`${this.player1.name} wins!`);
        } else if (this.player2.score > this.player1.score) {
            alert(`${this.player2.name} wins!`)
        } else {
            alert("It's a tie!"); 
        }
    }
}

//below are the prompts for players to enter their names in order to play the game
const player1Name = prompt('Enter the name of Player 1:');
const player2Name = prompt('Enter the name of Player 2:');

//below plays the game with the entered player names
let game = new Game('Emily', 'Josh');
game.playGame();