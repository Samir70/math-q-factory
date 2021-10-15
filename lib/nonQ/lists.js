const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
const smallPrimes = [2, 3, 5, 7];
const coprimePairs = [
    [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9],
    [2, 3], [2, 5], [2, 7], [2, 9],
    [3, 4], [3, 5], [3, 7], [3, 8],
    [4, 5], [4, 7], [4, 9],
    [5, 6], [5, 7], [5, 8], [5, 9],
    [6, 7], 
    [7, 8], [7, 9],
    [8, 9]
];

const coprimeTriples = [
    [1, 4, 5],
    [2, 3, 5], [2, 3, 7], [2, 5, 7],
    [3, 4, 5], [3, 4, 7], [3, 5, 7], [3, 5, 8], [3, 7, 8],
    [4, 5, 7], [4, 5, 9], [4, 7, 9], [4, 7, 11],
    [5, 6, 7], [5, 7, 8], [5, 7, 9]
];


const names = [
    'Alex', 'Arlene', 'Bruce', 'Caroline', 'Demi', 'Evette',
    'Felix', 'Farnaz', 'Grace', 'Helen', 'Isobel', 'James', 'Jana',
    'Katie', 'Kal', 'Louise', 'Meera', 'Muthu', 'Natalie', 'Nandini', 'Nadiya',
    'Parvathy',
    'Ranjit', 'Raji',
    'Sharon', 'Shraddha', 'Steven', 'Sam',
    'Victoria', 'Val',
    'Zanet'
];

const colours = [
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet',
    'black', 'brown', 'cyan', 'grey', 'pink', 'purple', 'scarlet', 'white'
]

module.exports = {
    primes, smallPrimes, coprimePairs, coprimeTriples,
    names, colours
}