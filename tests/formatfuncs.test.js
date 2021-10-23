const { joinList, cFracFormat } = require('../lib/nonQ/formatFuncs');
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

exports.formatFuncsTests = () => {
    testGiveNames();
    testCFracFormat();
}