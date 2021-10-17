const rFuncs = require('../../nonQ/randFuncs');
const { joinList } = require('../../nonQ/formatFuncs');

const shareQs = {
    findTotal: (names, basicRatio, ansRatio, askAbout) => {
        const total = ansRatio.reduce((acc, val) => acc + val, 0)
        return {
            qType: 'shortAnswer',
            q: `${joinList(names)} share some money in the ratio \n${basicRatio.join(':')} \n${names[askAbout[0]]} gets £${ansRatio[askAbout[0]]} \nHow much money did they share?`,
            a: total,
            hint: `Every time ${names[0]} gets £${basicRatio[0]}, ${names[1]} gets £${basicRatio[1]}`,
            giveAway: `How many times do you have to give ${names[askAbout[0]]} £${basicRatio[askAbout[0]]} so that he/she get £${ansRatio[askAbout[0]]}`,
            qFeedback: `${joinList(names)} get ${joinList(ansRatio.map(n => '£' + n))}, which gives a total of £${total}`
        }
    },
    givenTotal: (names, basicRatio, ansRatio, askAbout) => {
        const total = ansRatio.reduce((acc, val) => acc + val, 0)
        return {
            qType: 'shortAnswer',
            q: `${joinList(names)} share £${total} in the ratio \n${basicRatio.join(':')} \nHow much money does ${names[askAbout[0]]} get?`,
            a: ansRatio[askAbout[0]],
            hint: `Every time we share £${basicRatio.reduce((a, c) => a+c, 0)}: ${joinList(names)} get ${joinList(basicRatio.map(n => '£' + n))}. \nBut we have £${total} to share.`,
            giveAway: `How many times do we have to share £${basicRatio.reduce((a, c) => a+c, 0)} so that we share a total of £${total}?`,
            qFeedback: `${names[askAbout[0]]} gets £${ansRatio[askAbout[0]]}`
        }
    },
    givenDiff: (names, basicRatio, ansRatio, askAbout) => {
        const total = ansRatio.reduce((acc, val) => acc + val, 0)
        const comparison = ansRatio[askAbout[0]] > ansRatio[askAbout[1]] ? 'more' : 'less'
        const finalPart = askAbout.length === 2 ? 'How much money did they share?' : `How much does ${names[askAbout[2]]} get?`
        const ans = askAbout.length === 2 ? total : ansRatio[askAbout[2]]
        const qFeedback = askAbout.length === 2 ? `They shared £${total}` : `${names[askAbout[2]]} gets £${ansRatio[askAbout[2]]}`
        return {
            qType: `shortAnswer`,
            q: `${joinList(names)} share some money in the ratio \n${basicRatio.join(':')} \n${names[askAbout[0]]} gets £${Math.abs(ansRatio[askAbout[0]] - ansRatio[askAbout[1]])} ${comparison} than ${names[askAbout[1]]} \n${finalPart}`,
            a: ans,
            hint: `If ${joinList(names)} got ${joinList(basicRatio.map(n => '£' + n))}, then ${names[askAbout[0]]} would get £${Math.abs(basicRatio[askAbout[0]] - basicRatio[askAbout[1]])} ${comparison} than ${names[askAbout[1]]}`,
            giveAway: `Keep sharing £${basicRatio.reduce((a, c) => a+c, 0)} until ${names[askAbout[0]]} gets £${Math.abs(ansRatio[askAbout[0]] - ansRatio[askAbout[1]])} ${comparison} than ${names[askAbout[1]]}`,
            qFeedback
        }
    }
}

const shareSetup = (qName) => {
    let basicRatio = rFuncs.randomInt(2) ? rFuncs.randomCoprimePair() : rFuncs.randomCoprimeTriple()
    let m = rFuncs.randomElement([4, 5, 6, 7, 8, 9])
    let ansRatio = basicRatio.map(n => n * m)
    let askAbout = rFuncs.shuffleFY([0, 1, 2]).filter(n => n !== basicRatio.length)
    let names = rFuncs.randomNames(basicRatio.length);
    if (shareQs[qName] === undefined) {
        return { q: 'Default ratio-share- Q' }
    }
    return shareQs[qName](names, basicRatio, ansRatio, askAbout)
}

module.exports = {
    sectionName: 'share',
    qGetter: shareSetup
}