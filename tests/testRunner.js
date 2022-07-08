const { red, yellow, white, green } = require('./colours');

const compareFuncs = {
    areEqual: (got, expected) => got === expected,
    compareArrays: (got, expected) => got.join('-') === expected.join('-')
}

const testRunner = (job) => {
    let out = [];
    for (let i = 0; i < job.length; i++) {
        let { name, func, compareFunc, tests } = job[i]
        // console.log(name)
        const errors = [];
        let passed = 0;
        for (let t of tests) {
            let out = func(...t.args)
            // console.log(out, t.expect)
            if (compareFuncs[compareFunc](out, t.expect)) {
                passed++
            } else {
                errors.push({
                    testArgs: t.args,
                    got: out,
                    expected: t.expect
                })
            }
        }
        out.push({
            testName: name,
            result: `Passed ${passed} out of ${tests.length} tests`,
            errors
        })
    }
    return out
}

const displayResult = (resObj, showFullResults) => {
    if (resObj.errors.length === 0) {
        showFullResults && console.log(green, resObj.testName, '---> ', resObj.result, white);
    } else {
        console.log(red, resObj.testName, '----> ', resObj.result, white);
        for (let e of resObj.errors) {
            console.log(e)
        }
    }
    // console.log(white)
}

module.exports = { testRunner, displayResult }
