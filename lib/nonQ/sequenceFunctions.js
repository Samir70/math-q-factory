const seqTypes = new Set(['linear', 'geometric', 'fibonacci', 'quadratic', 'cubic', 'two-step', 'harmonic'])

const linearSeq = (n, diff, start) => Array(n).map((x, i) => diff*i + start)

const makeSeq = {
  linear: linearSeq(n, diff, start)
}

module.exports = {
  makeSeq
}
