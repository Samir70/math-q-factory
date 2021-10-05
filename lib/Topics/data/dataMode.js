const rFuncs = require('../../nonQ/randFuncs');
// modify this so that it is a pure function, with random numbers chosen seperately
const modeQ = (list) => {
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
        qType: 'shortAnswer',
        q: `Find the mode of ${list.join(', ')}`,
        a: modes.length > 2 ? 'none' : modes.join(' and '),
        qFeedback: modes.length > 2 ? 'Because more than 2 numbers come up equally often' : `${modes.join(' and ')} listed ${tally[modes[0]]} times, that is more often than other numbers`
    }
}

const modeSetup = () => {
    let dataType = rFuncs.randomInt(3); // 0, 1, 2
    let list = [6, 7, 7, 4, 5, 6, 4, 5, 7]
    const howMany = rFuncs.randomInt(4) + 6; // 6, 7, 8, 9
    switch (dataType) {
        case 0: {
            const max = rFuncs.randomInt(20) + 20;
            const min = rFuncs.randomInt(5) + 1;
            list = rFuncs.nRandomInts(howMany, max, min);
            break
        }
        case 1: {
            list = rFuncs.randomNames(howMany)
            break
        }
        default: {
            list = rFuncs.randomColours(howMany)
        }
    }
    let extra = rFuncs.randomElement(list)
    list = rFuncs.shuffleFY([...list, extra])
    return modeQ(list)
}

module.exports = {
    topic: 'mode',
    qGetter: modeSetup
}