const myMath = require('../lib/nonQ/myMathFuncs');
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

const cFracTests = [
    [[4, 5], [0, 1, 4]],
    [[415, 93], [4, 2, 6, 7]]
]

const testCFrac = () => {
    console.log('Testing myMath.cFrac()');
    let allPass = true;
    for (let [frac, ans] of cFracTests) {
        if (myMath.cFrac(...frac).join(',') !== ans.join(',')) {
            console.error(red, `myMath.cFrac failed for ${frac.join('/')} Expected ${ans} got ${myMath.cFrac(...frac)}`)
            allPass = false
        }
        if (allPass) { console.log(green, 'myMath.cFrac passed all tests') }
        console.log(white)
    }
}

exports.myMathTests = () => {
    testGCD();
    testRoundDP();
    testCFrac();
};