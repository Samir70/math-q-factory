const { penceToPounds } = require('../../lib/nonQ/myMathFuncs');

const penceToPoundsTests = {
    name: "Converting pence to pounds test",
    compareFunc: "areEqual",
    func: penceToPounds,
    tests: [
        // DESCRIBE WHAT THE ARGS DO, SHOULD BE SIM TO FUNC_BEING_TESTED
        // each object below is a test
        { args: [324], expect: '£3.24' },
        { args: [240], expect: '£2.40' },
        { args: [600], expect: '£6' },
        { args: [32], expect: '£0.32' }
    ]
}

exports.penceToPoundsTests = [penceToPoundsTests]