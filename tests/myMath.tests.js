const myMath = require('../lib/nonQ/myMathFuncs');
const { red, yellow, green, white } = require('./colours');

const twoDecimalTests = [
    [4.566, 4.57], [4.565, 4.57], [4.562, 4.56], [3.996, 4]
]
const testTwoDecimal = () => {
    console.log('Testing myMath.twoDecimal')
    let allPass = true;
    for (let [a, b] of twoDecimalTests) {
        if (myMath.twoDecimal(a) !== b) {
            console.error(red, `myMath.twoDecimal failed for ${[a, b]} got ${myMath.twoDecimal(a)}`)
            allPass = false
        }
    }
    if (allPass) { console.log(green, 'myMath.twoDecimal passed all tests') }
    console.log(white)
}

const oneDecimalTests = [
    [6.67, 6.7], [6.65, 6.7], [6.64, 6.6], [7.95, 8]
];
const testOneDecimal = () => {
    console.log('Testing myMath.oneDecimal')
    let allPass = true;
    for (let [a, b] of oneDecimalTests) {
        if (myMath.oneDecimal(a) !== b) {
            console.error(red, `myMath.oneDecimal failed for ${[a, b]} got ${myMath.oneDecimal(a)}`)
            allPass = false
        }
    }
    if (allPass) { console.log(green, 'myMath.oneDecimal passed all tests') }
    console.log(white)
}

exports.myMathTests = () => {
    testTwoDecimal()
    testOneDecimal()
}