const {makeSeq} = require('../../lib/nonQ/sequenceFunctions');
// need tests for ['', '', '', '', '', 'two-step', 'harmonic']

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
  func: makeSeq.linear,
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
  func: makeSeq.linear,
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
  func: makeSeq.linear,
  tests: [
    // args are n, a, b, c
    {args: [5, 1, 0, 0], expect: [1, 4, 9, 16, 25]  },
    {args: [5, 1, 1, 0], expect: [2, 6, 12, 20, 30]  },
    {args: [5, 1, 2, 1], expect: [4, 9, 16, 25, 36] }
  ]
}

const cubicSeqTests = {
  name: "Testing cubic sequences",
  compareFunc: "compareArrays",
  func: makeSeq.linear,
  tests: [
    // args are n, a, b, c, d = how many, coefs of x^3, x^2, x, const
    {args: [6, 1, 0, 0, 0], expect: [1, 8, 27, 64, 125, 216] },
    {args: [6, 1, 0, 0, 3], expect: [4, 11, 30, 67, 128, 219]  },
    {args: [6, 1, 0, 1, 3], expect: [5, 13, 33, 71, 133, 225]  },
    {args: [6, 1, 1, 1, 3], expect: [6, 17, 42, 87, 158, 261]  }, 
    {args: [6, 2, 3, 4, 5], expect: [14, 41, 98, 197, 350, 569]  }
  ]
}

exports.seqTests = [linearSeqTests, geometricSeqTests, fibonacciSeqTests, quadraticSeqTests]
