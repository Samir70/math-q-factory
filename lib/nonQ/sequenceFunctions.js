const seqTypes = new Set(['linear', 'geometric', 'fibonacci', 'quadratic', 'cubic', 'two-step', 'harmonic'])

const linearSeq = (n, diff, start) => [...Array(n)].map((x, i) => diff*i + start);
const geometricSeq = (n, r, start) => [...Array(n)].map((x, i) => r**i * start);

const makeSeq = {
  linear: linearSeq, 
  geometric: geometricSeq
}

module.exports = {
  makeSeq
}
