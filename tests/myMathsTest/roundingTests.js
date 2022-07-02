const { roundToWithin, roundDP } = require('../../lib/nonQ/myMathFuncs');

const rountToWithinTests = {
  name: "Rounding dodgy javaScript division to useful number of decimals",
  compareFunc: "areEqual",
  func: roundToWithin,
  tests: [
    // args are [javaScript division] expect: [good decimal answer]
    { args: [9 / 5, 0.00001], expect: 1.8 },
    { args: [9 / 4, 0.0001], expect: 2.25 },
    { args: [9 / 4, 0.1], expect: 2.3 }
  ]
}

const roundToDecPlaces = {
  name: "Testing myMath.roundDP(x, dp)",
  compareFunc: "areEqual",
  func: roundDP,
  tests: [
    // args are (value, decimal places)
    { args: [4.566, 4], expect: 4.566 },
    { args: [4.566, 3], expect: 4.566 },
    { args: [4.566, 2], expect: 4.57 },
    { args: [4.565, 2], expect: 4.57 },
    { args: [4.562, 2], expect: 4.56 },
    { args: [3.996, 2], expect: 4 },
    { args: [1.005, 2], expect: 1.01 },
    { args: [59.385, 2], expect: 59.39 },
    { args: [6.67, 1], expect: 6.7 },
    { args: [6.65, 1], expect: 6.7 },
    { args: [6.64, 1], expect: 6.6 },
    { args: [7.95, 1], expect: 8 },
    { args: [1.05, 1], expect: 1.1 }
  ]
}

exports.roundingTests = [rountToWithinTests, roundToDecPlaces]
