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

const exteriorAnglesOfRegPoly = [...Array(37).keys()].map(x => x < 3 ? null : 360/x);
const ratioExtToIntAnglesOfRegPoly = [...Array(37).keys()].map(n => n < 3 ? null : n % 2 ? [2, n - 2] : [1, n/2 - 1]);

const sliceNames = [
    'zeroth', 'oneth',
    'half', 'third', 'quarter', 'fifth', 'sixth', 'seventh', 'eighth', 'nineth'
]
const names = [
    'Alex', 'Arlene', 'Bruce', 'Bushra', 'Caroline', 'Claudia',
    'Demi', 'Evette', 'Esmay',
    'Felix', 'Farnaz', 'Grace', 'Helen', 'Hanaa', 'Isobel', 'James', 'Jana',
    'Katie', 'Kal', 'Keiran', 'Louise',
    'Meera', 'Muthu', 'Natalie', 'Nandini', 'Nadiya',
    'Oliver', 'Parvathy', 'Quentin', 'Ranjit', 'Raji',
    'Sharon', 'Shraddha', 'Steven', 'Sam', 'Tina', 'Usman',
    'Victoria', 'Val',
    'William', 'Xander', 'Yorik', 'Zanet'
];

const colours = [
    'red', 'orange', 'yellow', 'green', 'blue', //'indigo', 'violet',
    'black', 'brown', 'grey', 'pink', 'purple', 'white'
]

module.exports = {
    primes, smallPrimes, coprimePairs, coprimeTriples,
    exteriorAnglesOfRegPoly, ratioExtToIntAnglesOfRegPoly,
    sliceNames, names, colours
}
