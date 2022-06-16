export const linearSeqTests = {
  compareFunc: (got, expected) => got.join('-') === expected.join('-')
  tests: [
    // args are [n, diff, start]
    {args: [5, 4, 7], expect: [7, 11, 15, 19, 23]},
    {args: [6, -3, 20], expect: [20, 17, 14, 11, 8, 5] }
   ]
}
