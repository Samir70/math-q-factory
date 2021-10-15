// The functions that actually generate questions should be pure. 
// So they will accept random numbers as input, but always give the same output for the same input
const { primes, smallPrimes, coprimePairs, coprimeTriples, names, colours } = require('./lists')

const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
/**
 * 
 * @param {integer} n 
 * @returns integer from 0..n-1
 */
const randomInt = (n) => Math.floor(Math.random() * n);
/**
 * 
 * @param {*} n 
 * @param {*} max 
 * @param {*} min 
 * @returns an array of n integers from min..max-1
 */
const nRandomInts = (n, max, min) => {
    var out = [];
    var i = 0, range = max - min;
    while (i < n) {
        out.push(randomInt(range) + min);
        i++;
    }
    return out;
}

// Fisher-Yates shuffle algorithm
const shuffleFY = arr => {
    let out = [...arr];
    for (let i = out.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // number 0..i
        [out[i], out[j]] = [out[j], out[i]]
    }
    return out
}

const distinctElementsFrom = (n, arr) => {
    if (arr.length <= n) { return shuffleFY(arr) }
    return shuffleFY(arr).slice(0, n)
}

const randomPrime = (t) => t === 'small' ? randomElement(smallPrimes) : randomElement(primes);
const distinctPrimes = (n, t) => t === 'small' ?
    distinctElementsFrom(n, smallPrimes) : distinctElementsFrom(n, primes);
const randomCoprimePair = () => shuffleFY(randomElement(coprimePairs));
const randomCoprimeTriple = () => shuffleFY(randomElement(coprimeTriples));

const random2357 = (maxE) => {
    // This function gives a random number in prime power notation
    // The output is an object with powers property (powers to which 2, 3, 5, 7 are raised).
    // and value property
    // the highest exponent is maxE
    let exponents = [0, 0, 0, 0].map(x => randomInt(maxE + 1));
    if (exponents.every(x => x === 0)) { exponents = [0, 1, 0, 1] }// gives 21 as a default, rather than 0
    let value = [2, 3, 5, 7].map((x, i) => x ** exponents[i])
        .reduce((acc, val) => acc * val, 1)
    return { exponents, value }
}



const randomNames = (n) => distinctElementsFrom(n, names);
const randomColours = (n) => distinctElementsFrom(n, colours);

module.exports = {
    randomElement, randomInt, nRandomInts,
    shuffleFY,
    distinctElementsFrom,
    randomPrime, distinctPrimes, randomCoprimePair, randomCoprimeTriple,
    random2357, randomNames, randomColours
}