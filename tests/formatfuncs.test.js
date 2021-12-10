const { joinList, cFracFormat, makeExpression } = require('../lib/nonQ/formatFuncs');
const { red, green, white } = require('./colours');

const joinListTests = [
    { list: ['Tom'], joined: 'Tom' },
    { list: ['cyan', 'pink'], joined: 'cyan and pink' },
    { list: ['Meera', 'Isobel', 'Sharon'], joined: 'Meera, Isobel and Sharon' },
    { list: ['pink', 'brown', 'orange', 'purple'], joined: 'pink, brown, orange and purple' }
]

const testGiveNames = () => {
    console.log('Testing formatFuncs.joinList')
    let allPass = true;
    for (let test of joinListTests) {
        if (joinList(test.list) !== test.joined) {
            console.error(red, `joinList failed for ${test.list}`)
            console.error(red, `expected: ${test.joined}, got ${joinList(test.list)}`)
            allPass = false
        }
    }
    if (allPass) {
        console.log(green, 'formatFuncs.joinList passed all tests')
    }
    console.log(white)
}

const cFracFormatTests = [
    { arr: [4, 5, 6, 7], cFrac: '[4; 5, 6, 7]' },
    { arr: [4], cFrac: '[4]' },
    { arr: [8, 1], cFrac: '[8; 1]' }
]

const testCFracFormat = () => {
    console.log('Testing formatFuncs.cFracFormat')
    let allPass = true;
    for (let test of cFracFormatTests) {
        if (cFracFormat(test.arr) !== test.cFrac) {
            console.error(red, `cFracFormat failed for ${test.arr}`)
            console.error(red, `expected: ${test.cFrac}, got ${cFracFormat(test.arr)}`)
            allPass = false
        }
    }
    if (allPass) {
        console.log(green, 'formatFuncs.cFracFormat passed all tests')
    }
    console.log(white)
}

const makeExpressionTests = [
    { coefs: [6, 7, 3, -9, 4], vars: ['a', 'c', 'b', 'a', 'c'], expectedAns: '6a+7c+3b-9a+4c' },
    { coefs: [6, 7, 3, -9, 4], vars: ['a', 'c', '', 'a', 'c'], expectedAns: '6a+7c+3-9a+4c' },
    { coefs: [1, 3, -2, -4], vars: ['a', 'b', 'a', 'c'], expectedAns: 'a+3b-2a-4c' },
    { coefs: [7, 3, -2, -1], vars: ['a', 'b', 'a', 'c'], expectedAns: '7a+3b-2a-c' },
    { coefs: [1, 4, 0, 2], vars: ['a', 'b', 'a', 'b'], expectedAns: 'a+4b+2b' },
    { coefs: [0, 4, 4, 2], vars: ['a', 'b', 'a', 'b'], expectedAns: '4b+4a+2b' },
    { coefs: [0, 0, 0, 0], vars: ['a', 'b', 'a', 'b'], expectedAns: '0' },
    { coefs: [7, 6, 4], vars: [], expectedAns: null },
    { coefs: [], vars: ['a', 'b', 'a'], expectedAns: null },
    { coefs: [5, 2, -5, 1, 5], vars: ['a', 'c', 'b', 'c'], expectedAns: '5a+2c-5b+c' },
    { coefs: [5, 2, -5, 1], vars: ['a', 'c', 'b', 'c', 'a'], expectedAns: '5a+2c-5b+c' }
];
const testMakeExpressions = () => {
    console.log('Testing formatFuncs.makeExpressions')
    let allPass = true;
    for (let test of makeExpressionTests) {
        if (makeExpression(test.coefs, test.vars) !== test.expectedAns) {
            console.error(red, `makeExpression failed for ${JSON.stringify(test)}`)
            console.error(red, `expected: ${test.expectedAns}, got ${makeExpression(test.coefs, test.vars)}`)
            allPass = false
        }
    }
    if (allPass) {
        console.log(green, 'formatFuncs.cFracFormat passed all tests')
    }
    console.log(white)
}

exports.formatFuncsTests = () => {
    testGiveNames();
    testCFracFormat();
    testMakeExpressions();
}