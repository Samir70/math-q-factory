
// according to JS 100 * 1.005 = 100.499999
// but 1.005e2 gives 100.5
// this makes it easier to manage any number of decimal places
// [59.385, 59.39] fails if just use n.toFixed(2)

/**
 * 
 * @param {*} x    Number to round
 * @param {*} dp   how many decimal places
 * @returns a number; So use .toFixed(dp) to pad out with any needed zeros eg: 4 => 4.00
 */
const roundDP = (x, dp) => Number(Math.round(x + 'e' + dp) + 'e-' + dp)//.toFixed(dp)

/**
 * 
 * @param {*} x    The number to correct
 * @param {*} accuracy 
 * @returns a number, without the floating point accuracy errors. 
 * EG: 9/5 = 1.7999999999999998 should get corrected to 1.8
 * default accuracy is 10^-9
 */
const roundToWithin = (x, accuracy = 0.000000001) => {
    for (let i = 1; i < 10; i++) {
        let candidate = roundDP(x, i)
        if (Math.abs(candidate - x) < accuracy) {return candidate}
    }
    return x
}
const penceToPounds = p => '£' + Number(p + 'e-2') + (p % 10 === 0 && p % 100 !== 0 ? '0' : '');

const gcd = (nums) => {
    if (nums.length < 2) { return nums.length === 1 ? nums[0] : Infinity }
    // console.log('finding gcd of', nums)
    if (nums.length > 2) { return gcd([nums[0], gcd(nums.slice(1))]) }
    let [a, b] = nums;
    if (b < a) { [b, a] = nums }
    return a === 0 ? b : gcd([b % a, a])
}

const simplify = arr => {
    let f = gcd(arr)
    return arr.map(n => n / f)
}

// Fraction functions
/**
 * Convert a top heavy fraction to a mixed number. 
 * Output has 'big number' as zero if fraction is not top heavy
 * Output has second number zero if answer is an integer.
 * Output is not simplified
 * @param {Number} n numerator of fraction
 * @param {Number} d denominator of fraction
 */
const top2mixed = (n, d) => {
    if (n < d) { return [0, n, d] }
    let bigNum = Math.floor(n / d), rem = n - bigNum * d
    return [bigNum, rem, d]
}
const mixed2TopH = arr => {
    let [m, n, d] = arr
    return [m * d + n, d]
}

const cFrac = (top, bottom) => {
    let first = Math.floor(top / bottom);
    let newTop = top - (first * bottom)
    return newTop === 0 ? [first] : [first, ...cFrac(bottom, newTop)]
}

const convergents = (arr) => {
    let top = arr[0], bottom = 1, out = [[top, bottom]]
    let i = 1;
    while (i < arr.length) {
        top = top * arr[i] + (i === 1 ? 1 : out[i - 2][0])
        bottom = i === 1 ? arr[1] : bottom * arr[i] + out[i - 2][1]
        out.push([top, bottom]);
        i++
    }
    return out
}

const multInv = (num, base) => {
    // check that num and base are coprime
    if (gcd([num, base]) !== 1) { return null }
    let cFrac = module.exports.cFrac(num, base)
    let convs = convergents(cFrac)
    // console.log(cFrac, convs)
    let inv = convs[convs.length - 2][1]
    return (inv * num) % base === 1 ? inv : base - inv
}

module.exports = {
    roundDP, roundToWithin,
    penceToPounds, gcd,
    simplify, top2mixed, mixed2TopH,
    cFrac, convergents, multInv
}