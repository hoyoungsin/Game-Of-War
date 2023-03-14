class Cards {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = [];
        this.createDeck();
    }

    //create a deck with 52 cards with 4 suits
    createDeck() {
        let suits = ['Diamond', 'Club', 'Heart', 'Spade'];
        let ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Cards(suits[i], ranks[j], j + 1));
            }
        }
        //run shuffle
        this.shuffle()
    }
    //shuffles array
    shuffle() {
        this.cards = this.cards.sort((a, b) => 0.5 - Math.random())
    }
}


class GameOfWar {
    constructor() {
        //creates arrays for p1, p2, and pile
        this.p1 = [];
        this.p2 = [];
        this.pile = [];
        //creates deck and splits game
        this.deck = new Deck;
        // console.log(this.deck);
        this.splitDeck();
        // console.log(this.p1);
        // console.log(this.p2);
        //starts game
        this.startGame();
    }
    
    //split the deck array to p1 and p2
    splitDeck() {
        this.p1 = this.deck.cards.slice(0, 26);
        this.p2 = this.deck.cards.slice(26, 52);
    }

    //game start function
    startGame() {
        let p1Card = this.p1.shift();
        let p2Card = this.p2.shift();
        console.log(p1Card);
        console.log(p2Card);
        // while(this.p1.length !== 0 && this.p2.length !== 0){
            if(p1Card.value > p2Card.value) {
                console.log(`Player 1 played ${p1Card.rank} of ${p1Card.suit}s. Player 2 played ${p2Card.rank} of ${p2Card.suit}s. Player 1 wins!`);
                this.p1.push(this.p2Card, this.p1Card, ...this.pile);
                this.pile = [];
            } else if(p1Card.value < p2Card.value) {
                console.log(`Player 1 played ${p1Card.rank} of ${p1Card.suit}s. Player 2 played ${p2Card.rank} of ${p2Card.suit}s. Player 2 wins!`);
                this.p2.push(this.p1Card, this.p2Card, ...this.pile);
                this.pile = [];
                // console.log(this.p2)
            } else {
                console.log("War!");
                this.pile.push(this.p1Card, this.p2Card);
                this.war;
                // console.log(this.pile);
            }
        // }
        
    }
    war() {
        //adjust edge cases (if not enough cards)
        // ... means spread array objects out as opposed to the array itself
        // burn 3 cars each player
        this.pile.push(...this.p1.splice(0,3))
        this.pile.push(...this.p2.splice(0,3))
    }
}

const war = new GameOfWar;