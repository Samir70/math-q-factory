const {seqTests} = require('./myMathsTest/sequenceTests');

const compareFuncs = {
    areEqual: (got, expected) => got === expected,
    compareArrays: (got, expected) => got.join('-') === expected.join('-')
}


const testRunner = (job) => {
    for (let i = 0; i < job.length; i++) {
        let {name, func, compareFunc, tests} = job[i]
        console.log(name)
        for (let t of tests) {
            const errors = [];
            let out = func(...t.args)
            console.log(out, t.expect)
            console.log(compareFuncs[compareFunc](out, t.expect))
        }
    }
}

testRunner(seqTests)
