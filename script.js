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
        console.log("Deck Shuffled")
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
        console.log(`P1 was given ${this.p1.length} cards.`);
        console.log(`P2 was given ${this.p2.length} cards.`);

    }

    //game start function
    startGame() {
        console.log("War Start!")
        while(this.p1.length !== 0 && this.p2.length !== 0) {
            let p1Card = this.p1.pop();
            let p2Card = this.p2.pop();
            console.log(`Player 1 played ${p1Card.rank} of ${p1Card.suit}s. Player 2 played ${p2Card.rank} of ${p2Card.suit}s.`);
            // console.log(p1Card);
            // console.log(p2Card);
            // console.log(this.p1)
            // console.log(this.p2)
            if(p1Card.value > p2Card.value) {
                console.log(`Player 1 wins!`);
                console.log(`P1 has ${this.p1.length} cards left.`);
                console.log(`P2 has ${this.p2.length} cards left.`);
                this.p1.unshift(p1Card, p2Card, ...this.pile);
                this.pile = [];
            } else if(p1Card.value < p2Card.value) {
                console.log(`Player 2 wins!`);
                console.log(`P1 has ${this.p1.length} cards left.`);
                console.log(`P2 has ${this.p2.length} cards left.`);
                this.p2.unshift(p1Card, p2Card, ...this.pile);
                this.pile = [];
            } else {
                console.log("War!");
                this.pile.push(p1Card, p2Card);
                this.war();
            }
        }
        if (this.p1.length === 0) {
            console.log ("Player 1 is out of Cards. PLayer 2 wins!")
        } else {
            console.log ("Player 2 is out of Cards. PLayer 1 wins!")
        }
    }
    
    war() {
        console.log("I-Declare-WAR!");
        //adjust edge cases (if not enough cards)
        if (this.p1.length === 0) {
            console.log("Stalemate");
        } else if (this.p1.length === 1) {
            console.log("Player 1 Last Hope!")
        } else if (this.p1.length === 2) {
            let onlyTwo = this.p1.splice(0,1);
            // console.log(onlyTwo)
            console.log("Player 1 threw down 1 card.")
            this.pile.push(...onlyTwo);
        } else if (this.p1.length === 3) {
            let onlyThree = this.p1.splice(0,2);
            // console.log(onlyThree)
            console.log("Player 1 threw down 2 cards.")
            this.pile.push(...onlyThree);
        } else {
            let pileUp1 = this.p1.splice(0,3);
            // console.log(pileUp1)
            console.log("Player 1 threw down 3 cards.")
            //... spreads array object out as opposed to the array itself
            this.pile.push(...pileUp1);
            // console.log(this.pile)
        }
        
        if (this.p2.length === 0) {
            console.log("Stalemate");
        } else if (this.p2.length === 1) {
            console.log("Player 2 Last Hope!")
        } else if (this.p2.length === 2) {
            let onlyTwo = this.p2.splice(0, 1);
            // console.log(onlyTwo)
            console.log("Player 2 threw down 1 card.")
            this.pile.push(...onlyTwo);
        } else if (this.p2.length === 3) {
            let onlyThree = this.p2.splice(0,2);
            // console.log(onlyThree)
            console.log("Player 2 threw down 2 card.")
            this.pile.push(...onlyThree);
        } else {
            let pileUp2 = this.p2.splice(0,3);
            // console.log(pileUp2)
            console.log("Player 2 threw down 3 card.")
            //... spreads array object out as opposed to the array itself
            this.pile.push(...pileUp2);
        }
    }
}


const war = new GameOfWar;