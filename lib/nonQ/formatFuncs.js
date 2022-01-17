exports.joinList = (arr) => {
    if (arr.length <= 2) { return arr.join(' and ') }
    return arr[0] + ', ' + this.joinList(arr.slice(1))
}

exports.cFracFormat = (arr) => arr.length <= 1 ? `[${arr[0]}]` : `[${arr[0]}; ${arr.slice(1).join(', ')}]`

exports.stndrdth = (n) => {
    switch (n % 10) {
        case 1: { return 'st' }
        case 2: { return 'nd' }
        case 3: { return 'rd' }
        default: { return 'th' }
    }
}
/**
 * 
 * @param {[Number]} c 
 * @param {[String]} v 
 * @returns an expression combining the co-efficients and variables provided
 */
exports.makeExpression = (c, v) => {
    const l = Math.min(c.length, v.length);
    if (l === 0) { return null }
    let exp = '';
    for (let i = 0; i < l; i++) {
        if (c[i] !== 0) {
            exp += c[i] < 0 ? '-' : exp.length > 0 ? '+' : '';
            let val = Math.abs(c[i]);
            exp += val === 1 && v[i] !== '' ? '' : val;
            exp += v[i];
        }
    }
    return exp === '' ? '0' : exp;
}

/**
 * 
 * @param {[String]} s 
 * @returns the input wrapped in backticks, so MathJax can typeset AsciiMaths notation
 * Works even in template literal as: `Simplify ${wrapMJax('x^2 xx x^3')}`
 */
exports.wrapMJax = s => '`'+s+'`'