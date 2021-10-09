/**
 * 
 * @param {*} x a number to round
 * @returns a number with at most two decimal places
 */
exports.twoDecimal = (x) => {
    let x100 = Math.round(x * 100);
    let whole = Math.floor(x100 / 100), dec = x100 % 100;
    return Number('' + whole + '.' + dec)
}