const { gcd } = require('../../lib/nonQ/myMathFuncs');

const gcdTests = {
    name: "Testing that myMath.gcd can find the GCD of an array of numbers",
    compareFunc: "areEqual",
    func: gcd,
    tests: [
      // There is one argument, which is an array of integers
      { args: [[65]], expect: 65 },
      { args: [[1, 13]], expect: 1 },       
      { args: [[7, 15]], expect: 1  },
      { args: [[4, 8]], expect: 4 },
      { args: [[0, 6]], expect: 6 },
      { args: [[1470, 588]], expect: 294 },
      { args: [[210, 294]], expect: 42 },
      { args: [[882, 378]], expect: 126 },
      { args: [[441, 189, 315]], expect: 63 },
      { args: [[392, 1372, 980]], expect: 196 }
    ]
  }

exports.roundingTests = [gcdTests];
