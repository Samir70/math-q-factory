const { red, white, green } = require('./colours');
const { makeBBList } = require('../lib/makeBBList');

const dummyQConnections = {
    'a-b-f-900': ['a-b-g-500'],
    'a-b-g-500': ['m-n-o-400'],
    'a-b-e-500': ['a-b-d-350', 'm-n-o-400'],
    'a-b-d-350': ['c-m-n-200'],
    'm-n-o-400': ['c-m-n-200'],
    'c-m-n-200': [],
    'a-noRating-test' : ['a-noRating-q-strRating', 'a-b-e-500']
}

const dummyGetQs = (chap, sec, qName, rating) => {
    path = rating === undefined ? [chap, sec, qName].join('-') : [chap, sec, qName, rating].join('-')
    return { buildingBlocks: dummyQConnections[path] }
}

const tests = [
    { path: 'c-m-n-200', expect: [] },
    { path: 'c-m-unknown-200', expect: [] },
    { path: 'm-n-o-400', expect: ['c-m-n-200'] },
    { path: 'a-b-e-500', expect: ['c-m-n-200', 'a-b-d-350', 'm-n-o-400'] },
    { path: 'a-noRating-test', expect: ['a-noRating-q-strRating', 'c-m-n-200', 'a-b-d-350', 'm-n-o-400', 'a-b-e-500'] },
    { path: 'a-b-f-900', expect: ['c-m-n-200', 'm-n-o-400', 'a-b-g-500'] }
]

const testMakeBBList = (showAll = false) => {
    console.log(white, 'Testing makeBBList')
    for (let t of tests) {
        let bbs = makeBBList(t.path, dummyGetQs);
        let allGood = true;
        for (let i = 0; allGood && i < bbs.length; i++) {
            if (bbs[i] !== t.expect[i]) {
                allGood = false;
                console.log(red, `path: ${t.path} element ${i} is wrong. Have ${bbs} expected`, white, t.expect)
            }
        }
        if (bbs.length !== t.expect.length) {
            allGood = false;
            console.log(red, `path: ${t.path} has wrong length: ${bbs} expected`, white, t.expect)
        }
        if (allGood && showAll) {
            console.log(green, `path: ${t.path} gets proper building blocks`, white, bbs)
        }
    }
    console.log(white);
}

module.exports = { testMakeBBList }