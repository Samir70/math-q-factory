// The functions that actually generate questions should be pure. 
// So they will accept random numbers as input, but always give the same output for the same input
const { primes, smallPrimes, names } = require('./lists')

export const RandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const RandomInt = (n) => Math.floor(Math.random() * n);
export const nRandomInts = (n, max) => {
    var out = [];
    var i = 0;
    while (i < n) {
        out.push(RandomInt(max));
        i++;
    }
    return out;
}

// Fisher-Yates shuffle algorithm
export const shuffleFY = arr => {
    let out = [...arr];
    for (let i = out.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1)); // number 0..i
        [out[i], out[j]] = [out[j], out[i]]
    }
    return out
}

export const distinctElementsFrom = (n, arr) => {
    if (arr.length <= n) { return arr }
    return shuffleFY(arr).slice(0, n)
}

export const RandomPrime = (t) => t === 'small' ? RandomElement(smallPrimes) : RandomElement(primes);
export const distinctPrimes = (n, t) => t === 'small' ?
    distinctElementsFrom(n, smallPrimes) : distinctElementsFrom(n, primes);

export const random2357 = (maxE) => {
    // This function gives a random number in prime power notation
    // The output is an object with powers property (powers to which 2, 3, 5, 7 are raised).
    // and value property
    // the highest exponent is maxE
    let exponents = [0, 0, 0, 0].map(x => RandomInt(maxE + 1));
    if (exponents.every(x => x === 0)) { exponents = [0, 1, 0, 1] }// gives 21 as a default, rather than 0
    let value = [2, 3, 5, 7].map((x, i) => x ** exponents[i])
        .reduce((acc, val) => acc * val, 1)
    return { exponents, value }
}



export const randomNames = (n) => distinctElementsFrom(n, names);
