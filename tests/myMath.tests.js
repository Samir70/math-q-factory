const myMath = require('../lib/nonQ/myMathFuncs');
const rFuncs = require('../lib/nonQ/randFuncs');
const { red, yellow, green, white } = require('./colours');

const roundDPTests = [
    [4.566, 4.57, 2], [4.565, 4.57, 2], [4.562, 4.56, 2], [3.996, 4, 2],
    [1.005, 1.01, 2], [59.385, 59.39, 2],
    // one decimal place
    [6.67, 6.7, 1], [6.65, 6.7, 1], [6.64, 6.6, 1], [7.95, 8, 1],
    [1.05, 1.1, 1]
]
const testRoundDP = () => {
    console.log('Testing myMath.roundDP(x, dp)')
    let allPass = true;
    for (let [a, b, dp] of roundDPTests) {
        if (myMath.roundDP(a, dp) !== b) {
            console.error(red, `myMath.roundDP failed for ${a} exprected ${b} got ${myMath.roundDP(a, dp)}`)
            allPass = false
        }
    }
    if (allPass) { console.log(green, 'myMath.roundDP passed all tests') }
    console.log(white)
}

const gcdTests = [
    // [[a, b], gcd(a, b)]
    [[1, 13], 1], [[4, 8], 4], [[7, 15], 1], [[0, 6], 6],
    [[1470, 588], 294], [[210, 294], 42], [[882, 378], 126],
    [[441, 189, 315], 63], [[392, 1372, 980], 196]
]

const testGCD = () => {
    console.log('Testing myMath.gcd()');
    let allPass = true;
    for (let [nums, ans] of gcdTests) {
        if (myMath.gcd(nums) !== ans) {
            console.error(red, `myMath.gcd failed for ${nums}. Expected ${ans} got ${myMath.gcd(nums)}`)
            allPass = false;
        }
    }
    if (allPass) { console.log(green, 'myMath.gcd passed all tests') }
    console.log(white)
}

const simplifyTests = [
    { big: [25, 60, 45], simple: [5, 12, 9] }
]
const testSimplify = () => {
    console.log('Testing myMath.simplify');
    let allPass = true;
    for (let test of simplifyTests) {
        if (myMath.simplify(test.big).join(',') !== test.simple.join(',')) {
            console.error(red, `myMath.simplify failed for ${test.big}. Expected ${test.simple} got ${myMath.simplify(test.big)}`);
            allPass = false;
        }
    }
    if (allPass) { console.log(green, 'myMath.simplify passed all set tests') };
    console.log(white)
}

const cFracTests = [
    [[4, 5], [0, 1, 4]],
    [[415, 93], [4, 2, 6, 7]],
    [[546, 61], [8, 1, 19, 3]],
    [[16, 61], [0, 3, 1, 4, 3]],
    [[5, 1], [5]]
]

const testCFrac = () => {
    console.log('Testing myMath.cFrac()');
    let allPass = true;
    for (let [frac, ans] of cFracTests) {
        if (myMath.cFrac(...frac).join(',') !== ans.join(',')) {
            console.error(red, `myMath.cFrac failed for ${frac.join('/')} Expected ${ans} got ${myMath.cFrac(...frac)}`)
            allPass = false
        }
    }
    if (allPass) { console.log(green, 'myMath.cFrac passed all tests') }
    console.log(white)
}

const convergentsTests = [
    { cFrac: [4, 2, 6, 7], convergents: [[4, 1], [9, 2], [58, 13], [415, 93]] }
]

const testConvergents = () => {
    console.log('Testing myMath.convergents()');
    let allPass = true;
    for (let test of convergentsTests) {
        if (myMath.convergents(test.cFrac).join(',') !== test.convergents.join(',')) {
            console.error(red, `myMath.convergents failed for ${test.cFrac} Expected ${test.convergents} got ${myMath.convergents(test.cFrac)}`)
            allPass = false
        }
    }
    if (allPass) { console.log(green, 'myMath.convergents passed all tests') }
}

const rndTests4cFracs = (reps = 50) => {
    let allPass = true;
    for (let i = 0; i < reps; i++) {
        let [top, bottom] = rFuncs.nRandomInts(2, 20, 500);
        if (top === bottom) { top-- }
        let gcd = myMath.gcd([top, bottom])
        let cFrac = myMath.cFrac(top, bottom)
        let convs = myMath.convergents(cFrac)
        let final = convs[convs.length - 1]
        if ([top, bottom].map(n => n / gcd).join('/') !== final.join('/')) {
            console.error(red, 'Random test for continued fractions failed')
            console.log(`for ${[top, bottom].join('/')} got cFrac ${cFrac} and convergents ${convs.map(r => r.join('/')).join(', ')}`)
            allPass = false;
        }
    }
    if (allPass) { console.log(green, `Passed ${reps} random tests for continued fractions`) }
}

const multInvTests = [
    // [num, base, num^-1]
    [2, 7, 4], [9, 17, 2], [5, 25, null], [1, 9, 1], [9, 5, 4]
]

const testMultInv = (reps = 50) => {
    console.log('Testing myMath.multInv()');
    let allPass = true;
    for (let [num, base, inv] of multInvTests) {
        if (myMath.multInv(num, base) !== inv) {
            console.error(red, `myMath.multInv failed for ${num} mod ${base} Expected ${inv} got ${myMath.multInv(num, base)}`)
            allPass = false
        }
    }
    if (allPass) { console.log(green, 'myMath.multInv passed all set tests') }
    allPass = true
    for (let i = 0; i < reps; i++) {
        let [num, base] = rFuncs.nRandomInts(2, 5000, 200)
        while (myMath.gcd([num, base]) !== 1) { base++ }
        let inv = myMath.multInv(num, base)
        if ((inv * num) % base !== 1) {
            console.error(red, `myMath.multInv failed for ${num} mod ${base}, got ${inv} while ${num}*${inv} == ${(num * inv) % base} mode ${base}`)
            allPass = false;
        }
    }
    if (allPass) { console.log(green, `myMath.multInv passed ${reps} random tests`) }
    console.log(white)
}

exports.myMathTests = () => {
    testGCD();
    testSimplify();
    testRoundDP();
    testCFrac();
    testConvergents();
    rndTests4cFracs();
    testMultInv();
};