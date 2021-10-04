const rFuncs = require('../../nonQ/randFuncs');
// modify this so that it is a pure function, with random numbers chosen seperately
const modeQ = () => {
    const howMany = rFuncs.randomInt(4) + 6; // 6, 7, 8, 9
    const offset = rFuncs.randomInt(20) + 1;
    var list = rFuncs.nRandomInts(howMany, 20).map(x => x + offset);
    var tally = {}, modes = [], maxFreq = 0;
    list.forEach(v => tally[v] = (tally[v] || 0) + 1);
    for (var p in tally) {
        if (tally[p] > maxFreq) {
            maxFreq = tally[p];
            modes = [p]
        } else {
            if (tally[p] === maxFreq) {
                modes.push(p)
            }
        }
        // console.log('property:', p, 'maxFreq:', maxFreq, 'modes are:', modes)
    }
    // console.log(list, tally)
    return {
        q: `Find the mode of ${list.join(', ')}`,
        a: modes.length > 2 ? 'none' : modes.join(' and ')
    }
}

module.exports = {
    topic: 'mode',
    qGetter: modeQ
}