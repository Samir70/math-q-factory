const { roundToWithin  } = require('../../lib/nonQ/myMathFuncs');

const rountToWithinTests = {
  name: "Rounding dodgy javaScript division to useful number of decimals",
  compareFunc: "areEqual",
  func: roundToWithin,
  tests: [
    // args are [javaScript division] expect: [good decimal answer]
    {args: [9/5, 0.00001], expect: 1.8},
    {args: [9/4, 0.0001], expect: 2.25},
    {args: [9/4, 0.1], expect: 2.3}
  ]
}

exports.roundingTests = [rountToWithinTests]
