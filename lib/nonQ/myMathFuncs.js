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
/**
 * 
 * @param {*} x a number to round
 * @returns a number with at most one decimal places
 */
exports.oneDecimal = (x) => {
    let x10 = Math.round(x * 10);
    let whole = Math.floor(x10 / 10), dec = x10 % 10;
    return Number('' + whole + '.' + dec)
}