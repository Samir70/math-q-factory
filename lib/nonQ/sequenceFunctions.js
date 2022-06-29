const seqTypes = new Set(['linear', 'geometric', 'fibonacci', 'quadratic', 'cubic', 'two-step', 'harmonic'])

const cubicSeq = (n, a, b, c, d) => [...Array(n)].map((x, i) => a*x**3 + b*x**2 + c*x + d);
const linearSeq = (n, diff, start) => cubicSeq(n, 0, 0, diff, start);
const quadraticSeq = (n, a, b, c) => cubicSeq(n, 0, a, b, c);
const geometricSeq = (n, r, start) => [...Array(n)].map((x, i) => r**i * start);
const fibonacciSeq = (n, a, b) => {
  let out = [a, b];
  while (out.length < n) {
    [a, b] = [b, a+b]
    out.push(b)
  }
  return out
}
const twoStepSeq = (n, start, mult, add) => {
  let out = [start], last = start;
  while (out.length < n) {
    last = last * mult + add;
    out.push(last)
  }
  return out
}
const harmonicSeq = (n, diff, start) => linearSeq(n, diff, start).map(x => 1/x)

const makeSeq = {
  linear: linearSeq, 
  geometric: geometricSeq,
  fibonacci: fibonacciSeq, 
  quadratic: quadraticSeq, 
  cubic: cubicSeq, 
  twoStep: twoStepSeq, 
  harmonic: harmonicSeq
}

module.exports = {
  makeSeq
}
