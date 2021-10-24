
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
exports.roundDP = (x, dp) => Number(Math.round(x + 'e' + dp) + 'e-' + dp)//.toFixed(dp)

exports.gcd = (nums) => {
    if (nums.length < 2) { return nums.length === 1 ? nums[0] : Infinity}
    // console.log('finding gcd of', nums)
    if (nums.length > 2) { return this.gcd([nums[0], this.gcd(nums.slice(1))]) }
    let [a, b] = nums;
    if (b < a) { [b, a] = nums }
    return a === 0 ? b : this.gcd([b % a, a])
}

exports.simplify = arr => {
    let f = this.gcd(arr)
    return arr.map(n => n / f)
}

exports.cFrac = (top, bottom) => {
    let first = Math.floor(top / bottom);
    let newTop = top - (first * bottom)
    return newTop === 0 ? [first] : [first, ...this.cFrac(bottom, newTop)]
}

exports.convergents = (arr) => {
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

exports.multInv = (num, base) => {
    // check that num and base are coprime
    if (this.gcd([num, base]) !== 1) { return null }
    let cFrac = this.cFrac(num, base)
    let convs = this.convergents(cFrac)
    // console.log(cFrac, convs)
    let inv = convs[convs.length - 2][1]
    return (inv * num) % base === 1 ? inv : base - inv
}