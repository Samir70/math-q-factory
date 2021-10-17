const rFuncs = require('../../nonQ/randFuncs');
const { joinList } = require('../../nonQ/formatFuncs');

const shareQs = {
    findTotal: (names, basicRatio, ansRatio, askAbout) => {
        const total = ansRatio.reduce((acc, val) => acc + val, 0)
        return {
            q: `${joinList(names)} share some money in the ratio \n${basicRatio.join(':')} \n${names[askAbout[0]]} gets £${ansRatio[askAbout[0]]} \nHow much money did they share?`,
            a: total,
        }
    },
    givenTotal: (names, basicRatio, ansRatio, askAbout) => {
        const total = ansRatio.reduce((acc, val) => acc + val, 0)
        return {
            q: `${joinList(names)} share £${total} in the ratio \n${basicRatio.join(':')} \nHow much money does ${names[askAbout[0]]} get?`,
            a: ansRatio[askAbout[0]],
        }
    },
    givenDiff: (names, basicRatio, ansRatio, askAbout) => {
        const total = ansRatio.reduce((acc, val) => acc + val, 0)
        const comparison = ansRatio[askAbout[0]] > ansRatio[askAbout[1]] ? 'more' : 'less'
        const finalPart = askAbout.length === 2 ? 'How much money did they share?' : `How much does ${names[askAbout[2]]} get?`
        const ans = askAbout.length === 2 ? total : ansRatio[askAbout[2]]
        return {
            q: `${joinList(names)} share some money in the ratio \n${basicRatio.join(':')} \n${names[askAbout[0]]} gets ${Math.abs(ansRatio[askAbout[0]] - ansRatio[askAbout[1]])} ${comparison} than ${names[askAbout[1]]} \n${finalPart}`,
            a: ans
        }
    }
}

const shareSetup = (qName) => {
    let basicRatio = rFuncs.randomInt(2) ? rFuncs.randomCoprimePair() : rFuncs.randomCoprimeTriple()
    let m = rFuncs.randomElement([4, 5, 6, 7, 8, 9])
    let ansRatio = basicRatio.map(n => n * m)
    let askAbout = rFuncs.shuffleFY([0, 1, 2]).filter(n => n !== basicRatio.length)
    let names = rFuncs.randomNames(basicRatio.length);
    // if (qName === 'givenTotal') { qName += (rFuncs.randomInt(2) + 1) }
    if (shareQs[qName] === undefined) {
        return { q: 'Default ratio-share- Q' }
    }
    return shareQs[qName](names, basicRatio, ansRatio, askAbout)
}

module.exports = {
    sectionName: 'share',
    qGetter: shareSetup
}