function solve(arr) {
    let deck = arr.shift().split(', ');
    let n = Number(arr.shift());

    for (let i = 0; i < n; i++) {
        let commandParts = arr[i].split(', ');
        let action = commandParts[0];
        let cardName = commandParts[1];
        let index;

        switch (action) {
            case 'Add':
                if (deck.includes(cardName)) {
                    console.log('Card is already in the deck');
                } else {
                    deck.push(cardName);
                    console.log('Card successfully added');
                }
                break;
            case 'Remove':
                if (deck.includes(cardName)) {
                    deck = deck.filter(card => card !== cardName);
                    console.log('Card successfully removed');
                } else {
                    console.log('Card not found');
                }
                break;
            case 'Remove At':
                index = Number(cardName);
                if (index >= 0 && index < deck.length) {
                    deck.splice(index, 1);
                    console.log('Card successfully removed');
                } else {
                    console.log('Index out of range');
                }
                break;
            case 'Insert':
                index = Number(cardName);
                let newCardName = commandParts[2];
                if (index >= 0 && index < deck.length) {
                    if (deck.includes(newCardName)) {
                        console.log('Card is already in the deck');
                    } else {
                        deck.splice(index, 0, newCardName);
                        console.log('Card successfully added');
                    }
                } else {
                    console.log('Index out of range');
                }
                break;
        }
    }

    console.log(deck.join(', '));
}

solve([
    'Ace of Diamonds, Queen of Hearts, King of Clubs',
    '3',
    'Add, King of Diamonds',
    'Insert, 2, Jack of Spades',
    'Remove, Ace of Diamonds'
]);
console.log('-------------------------------------------------------------------------')


solve(["Two of Clubs, King of Spades, Five of Spades, Jack of Hearts",
    "2",
    "Add, Two of Clubs",
    "Remove, Five of Hearts"])
console.log('-------------------------------------------------------------------------')

solve(["Jack of Spades, Ace of Clubs, Jack of Clubs",
    "2",
    "Insert, -1, Queen of Spades",
    "Remove At, 1"])
