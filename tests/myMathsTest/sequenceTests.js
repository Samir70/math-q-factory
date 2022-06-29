const {makeSeq} = require('../../lib/nonQ/sequenceFunctions');

const linearSeqTests = {
  name: "Testing linear sequences",
  compareFunc: "compareArrays",
  func: makeSeq.linear,
  tests: [
    // args are [n, diff, start]
    { args: [5, 4, 7], expect: [7, 11, 15, 19, 23] },
    { args: [6, -3, 20], expect: [20, 17, 14, 11, 8, 5] }
  ]
}

const geometricSeqTests = {
  name: "Testing Goemetric sequences",
  compareFunc: "compareArrays",
  func: makeSeq.geometric,
  tests: [
    //args are [n, r, start]
    { args: [5, 2, 3], expect: [3, 6, 12, 24, 48] },
    { args: [5, 2, -3], expect: [-3, -6, -12, -24, -48] },
    { args: [6, -2, 3], expect: [3, -6, 12, -24, 48, -96] },
    { args: [6, 0.5, 96], expect: [96, 48, 24, 12, 6, 3] }
  ]
}

const fibonacciSeqTests = {
  name: "Testing fibonacci sequences",
  compareFunc: "compareArrays",
  func: makeSeq.fibonacci,
  tests: [
    { args: [5, 1, 1], expect: [1, 1, 2, 3, 5] },
    { args: [6, 2, 3], expect: [2, 3, 5, 8, 11, 19] },
    { args: [6, 1, -1], expect: [1, -1, 0, -1, -1, -2] },
    { args: [6, -1, 1], expect: [-1, 1, 0, 1, 1, 2] },
    { args: [6, 3, -2], expect: [3, -2, 1, -1, 0, -1] }
  ]
}

const quadraticSeqTests = {
  name: "Testing quadratic sequences",
  compareFunc: "compareArrays",
  func: makeSeq.quadratic,
  tests: [
    // args are n, a, b, c
    {args: [6, 1, 0, 0], expect: [1, 4, 9, 16, 25, 36]  },
    {args: [5, 1, 1, 0], expect: [2, 6, 12, 20, 30]  },
    {args: [5, 1, 2, 1], expect: [4, 9, 16, 25, 36] }
  ]
}

const cubicSeqTests = {
  name: "Testing cubic sequences",
  compareFunc: "compareArrays",
  func: makeSeq.cubic,
  tests: [
    // args are n, a, b, c, d = how many, coefs of x^3, x^2, x, const
    {args: [6, 1, 0, 0, 0], expect: [1, 8, 27, 64, 125, 216] },
    {args: [6, 1, 0, 0, 3], expect: [4, 11, 30, 67, 128, 219]  },
    {args: [6, 1, 0, 1, 3], expect: [5, 13, 33, 71, 133, 225]  },
    {args: [6, 1, 1, 1, 3], expect: [6, 17, 42, 87, 158, 261]  }, 
    {args: [5, 2, 3, 4, 5], expect: [14, 41, 98, 197, 350]  }
  ]
}

const twoStepSeqTests = {
  name: "Testing two step sequences",
  compareFunc: "compareArrays",
  func: makeSeq.twoStep,
  tests: [
    // args are n, start, mult, add = 1st term, how many step one (what to multiply by) step two (what to add)
    // Can be described by two steps that have adding first, but I have chosen this way
    {args: [5, 3, 2, 1], expect: [3, 7, 15, 31, 63] },
    {args: [6, 1, 3, 4], expect: [1, 7, 25, 79, 241, 727] },
    {args: [6, 2, 7, 5], expect: [2, 19, 138, 971, 6802, 47619] }
  ]
}

const harmonicSeqTests = {
  name: "Testing harmonic sequences",
  compareFunc: "compareArrays",
  func: makeSeq.harmonic,
  tests: [
    // args are n, diff, start = parameters for linear sequence that is the reciprocal of target sequence
    { args: [6, 1/6, 1/6], expect: [6, 3, 2, 1.5, 1.2, 1] },
    { args: [5, 1/9, 1/9], expect: [9, 4.5, 3, 2.25, 1.8] },
    { args: [5, 3, -4], expect: [-0.25, -1, 0.5, 0.2, 0.125] } //linear is -4, -1, 2, 5, 8
  ]
}

exports.seqTests = [linearSeqTests, geometricSeqTests, fibonacciSeqTests, quadraticSeqTests, cubicSeqTests, twoStepSeqTests, harmonicSeqTests]
