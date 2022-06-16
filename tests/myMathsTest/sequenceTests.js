const compareArrays = (got, expected) => got.join('-') === expected.join('-')
const linearSeqTests = {
  compareFunc: compareArrays,
  tests: [
    // args are [n, diff, start]
    {args: [5, 4, 7], expect: [7, 11, 15, 19, 23]},
    {args: [6, -3, 20], expect: [20, 17, 14, 11, 8, 5] }
   ]
}

const geometricSeqTests = {
  compareFunc: compareArrays,
  tests: [
    //args are [n, r, start]
    {args: [5, 2, 3], expect: [3, 6, 12, 24, 48]},
    {args: [5, 2, -3], expect: [-3, -6, -12, -24, -48]},
    {args: [6, -2, 3], expect: [3, -6, 12, -24, 48, -96]},
    {args: [6, 0.5, 96], expect: [96, 48, 24, 12, 6, 3]}
  ]
}

export const seqTests = [linearSeqTests, geometricSeqTests]
