const { penceToPounds } = require('../../lib/nonQ/myMathFuncs');

const penceToPoundsTests = {
    name: "Converting pence to pounds test",
    compareFunc: "areEqual",
    func: penceToPounds,
    tests: [
        // The argument is the number of pence to convert
        { args: [324], expect: '£3.24' },
        { args: [240], expect: '£2.40' },
        { args: [600], expect: '£6' },
        { args: [32], expect: '£0.32' }
    ]
}

exports.penceToPoundsTests = [penceToPoundsTests]