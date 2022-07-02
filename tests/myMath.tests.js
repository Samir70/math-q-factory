const myMath = require('../lib/nonQ/myMathFuncs');
const rFuncs = require('../lib/nonQ/randFuncs');
const { seqTests } = require('./myMathsTest/sequenceTests');
const { roundingTests } = require('./myMathsTest/roundingTests');
const { testRunner, displayResult } = require('./testRunner');
const { red, yellow, green, white } = require('./colours');

const penceToPoundsTests = [
    [324, '£3.24'], ['240', '£2.40'], [600, '£6'], [32, '£0.32']
];

const testPenceToPounds = () => {
    console.log('Testing myMath.penceToPounds');
    let allPass = true;
    for (let [pence, pounds] of penceToPoundsTests) {
        if (myMath.penceToPounds(pence) !== pounds) {
            console.log(red, `myMath.penceToPounds failed for ${pence}. Expected ${pounds} got ${myMath.penceToPounds(pence)}`)
            allPass = false
        }
    }
    if (allPass) { console.log(green, 'myMath.penceToPounds passed all tests') }
    console.log(white)
}

const gcdTests = [
    // [[a, b], gcd(a, b)]
    [[65], 65],
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
    { big: [25, 60, 45], simple: [5, 12, 9] },
    { big: [25, 60], simple: [5, 12] },
    { big: [25], simple: [1] }
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

const top2MixedTests = [
    { topHeavey: [28, 5], mixed: [5, 3, 5] },
    { topHeavey: [28, 55], mixed: [0, 28, 55] },
    { topHeavey: [28, 3], mixed: [9, 1, 3] },
    { topHeavey: [28, 7], mixed: [4, 0, 7] },
    { topHeavey: [30, 27], mixed: [1, 3, 27] }
]
const testTop2Mixed = () => {
    console.log('Testing myMath.top2mixed');
    let allPass = true;
    for (let test of top2MixedTests) {
        let [n, d] = test.topHeavey
        if (myMath.top2mixed(n, d).join('-') !== test.mixed.join('-')) {
            console.error(red, `myMath.top2Mixed failed for ${test.topHeavey}. Expected ${test.mixed} got ${myMath.top2mixed(n, d)}`);
            allPass = false;
        }
    }
    if (allPass) { console.log(green, 'myMath.top2mixed passed all set tests') };
    console.log(white)
}

const testMixed2TopH = () => {
    console.log('Testing myMath.mixed2TopH');
    let allPass = true;
    for (let test of top2MixedTests) {
        if (test.mixed[1] === 0) { continue }
        if (myMath.mixed2TopH(test.mixed).join('-') !== test.topHeavey.join('-')) {
            console.error(red, `myMath.mixed2TopH failed for ${test.mixed}. Expected ${test.topHeavey} got ${myMath.mixed2TopH(test.mixed)}`);
            allPass = false;
        }
    }
    if (allPass) { console.log(green, 'myMath.mixed2TopH passed all set tests') };
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

exports.myMathTests = (showAll) => {
    testGCD();
    testSimplify();
    testTop2Mixed();
    testMixed2TopH();
    testRoundDP();
    testPenceToPounds();
    testCFrac();
    testConvergents();
    rndTests4cFracs();
    testMultInv();
    const tests = [seqTests, roundingTests];
    tests.forEach(t => {
        testRunner(t).forEach(r => displayResult(r, showAll))
    })
};