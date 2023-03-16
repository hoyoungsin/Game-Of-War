# Game Of War (Javascript)

A simulation of Game of War, a classic card game, in Javascript.

## Getting Started

In order to runt on your local device, follow the following instrucctions.
- Fork repository to target GitHub.
- Clone repotsitory to local directory.
- Run Javascript file in the cloned repository using the code snippet below.
```
node script.js
```

### Features

- Iterates a shuffled deck of cards 52.
- When game is started, the deck is split in half and given to both players.
- Each player plays a card and their values are compared.
- Player with the higher value card will win and take winning cards.
- In the case of a tie, War is started and each player throws down 3 cards. Each player plays one more card to compare. Winner takes all cards into their deck.
  - War can repeat.
  - In the case any player has less than 4 cards, the last card played will be compared.

### Planned Features

The following are planned features:

- Currently stalemate does not end game but game will run.
- Change suits to symbols
- Include player action for playing a card.
- Include player action for shuffling player deck.


## Authors
  - **Hoyoung Sin** - *Created README and script*
  - **Billie Thompson** - *Provided README Template* -
    [PurpleBooth](https://github.com/PurpleBooth)

See also the list of
[contributors](https://github.com/PurpleBooth/a-good-readme-template/contributors)
who participated in this project.
