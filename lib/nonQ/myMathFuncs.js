
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