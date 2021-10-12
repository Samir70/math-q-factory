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
            console.error(red, `myMath.twoDecimal failed for ${a} exprected ${b} got ${myMath.roundDP(a, dp)}`)
            allPass = false
        }
    }
    if (allPass) { console.log(green, 'myMath.roundDP passed all tests') }
    console.log(white)
}

exports.myMathTests = () => {
    testRoundDP()
}