const seqTypes = new Set(['linear', 'geometric', 'fibonacci', 'quadratic', 'cubic', 'two-step', 'harmonic'])

const linearSeq = (n, diff, start) => [...Array(n)].map((x, i) => diff*i + start);
const geometricSeq = (n, r, start) => [...Array(n)].map((x, i) => r**i * start);
const fibonacciSeq = (n, a, b) => {
  let out = [a, b];
  while (out.length < n) {
    [a, b] = [b, a+b]
    out.push(b)
  }
  return out
} 
const quadraticSeq = (n, a, b, c) => [...Array(n)].map((x, i) => a*x**2 + b*x + c);

const makeSeq = {
  linear: linearSeq, 
  geometric: geometricSeq,
  fibonacci: fibonacciSeq, 
  quadratic: quadraticSeq
}

module.exports = {
  makeSeq
}
