const { joinList } = require('../lib/nonQ/formatFuncs');
const { red, green, white } = require('./colours');

const joinListTests = [
    { list: [ 'Meera', 'Isobel', 'Sharon' ], joined: 'Meera, Isobel and Sharon' },
    { list: [ 'Tom' ], joined: 'Meera' }
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

exports.formatFuncsTests = () => {
    testGiveNames()
}