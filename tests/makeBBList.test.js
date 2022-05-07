const { red, white, green } = require('./colours');
const { makeBBList } = require('../lib/makeBBList');

const dummyQConnections = {
    'a-b-f-900': ['a-b-e-500'],
    'a-b-e-500': ['a-b-d-350', 'm-n-o-400'],
    'a-b-d-350': ['c-m-n-200'],
    'm-n-o-400': []
}

const dummyGetQs = (chap, sec, qName, rating) => {
    path = [chap, sec, qName, rating].join('-')
    return { buildingBlocks: dummyQConnections[path] }
}

const tests = [
    { path: 'm-n-o-400', expect: [] }
]

const testMakeBBList = (showAll = false) => {
    console.log(white, 'Testing makeBBList')
    for (let t of tests) {
        let bbs = makeBBList(t.path, dummyGetQs);
        let allGood = true;
        for (let i = 0; allGood && i < bbs.length; i++) {
            if (bbs[i] !== t.expect[i]) {
                allGood = false;
                console.log(red, `path: ${t.path} elsement ${i} gives ${bbs[i]} expected`, t.expect)
            }
        }
        if (bbs.length !== t.expect.length) {
            allGood = false;
            console.log(red, `path: ${t.path} has wrong length: ${bbs} expected`, t.expect)
        }
        if (allGood && showAll) {
            console.log(green, `path: ${t.path} gets proper building blocks`)
        }
    }
    console.log(white);
}

module.exports = { testMakeBBList }