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
            console.error(red, `myMath.twoDecimal failed for ${[a, b]} got ${myMath.twoDecimal}`)
            let allPass = false
        }
    }
    if (allPass) {console.log(green, 'myMath.twoDecimal passed all tests')}
    console.log(white)
}

exports.myMathTests = () => {
    testTwoDecimal()
}