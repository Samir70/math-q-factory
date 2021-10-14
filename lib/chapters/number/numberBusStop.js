const rFuncs = require('../../nonQ/randFuncs');

const selector = {
    noCarry1: (ans, divisor) => {
        return {
            q: `What is ${ans * divisor} divided by ${divisor}`, a: ans,
            hint: `Divide each digit by ${divisor}`,
            giveAway: `The answer ends in ${ans % 100}, can you work out the start?`,
            qFeedback: `${ans * divisor} / ${divisor} = ${ans}`
        }
    },
    noCarry2: (ans, divisor) => {
        let table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => n * divisor);
        return {
            q: `What is ${ans * divisor} divided by ${divisor}`, a: ans,
            hint: `Do you see numbers from the ${divisor} times table in the question?`,
            giveAway: `The ${divisor} times table is ${table.join(', ')}`,
            qFeedback: `${ans * divisor} / ${divisor} = ${ans}`
        }
    },
    noRemainder: (ans, divisor) => {
        let [h, t, u] = [ans - ans % 100, ans - ans % 10, ans % 10]
        t = t - h
        return {
            q: `What is ${ans * divisor} divided by ${divisor}`, a: ans,
            hint: `Use bus-stop method or split the number into ${[h, t, u].filter(n => n > 0).map(n => n*divisor).join('+')}`,
            giveAway: `${[h, t, u].filter(n => n > 0).map(n => n*divisor).join('+')} divided by ${divisor} is ${[h, t, u].filter(n => n > 0).join('+')}}`,
            qFeedback: `${ans * divisor} / ${divisor} = ${ans}`
        }
    },
    withRemainder: (ans, divisor, leftover) => {
        let toShare = (ans * divisor) + leftover
        ans = Number((toShare / divisor).toFixed(3))
        return {
            q: `What is ${toShare} divided by ${divisor} (to at most 3 decimal places)`, a: ans,
            hint: `You will need to use something like bus-stop method`,
            giveAway: `Since there is a remainder, you will need zeros after the decimal: ${toShare+'.000'} in the bus-stop`,
            qFeedback: `${toShare} / ${divisor} = ${ans}`
        }
    }
}

const busStopQ = (qName, ans, divisor, leftOver) => {
    if (selector[qName] === undefined) {
        return { q: 'default busStop Q' }
    }
    let question = selector[qName](ans, divisor, leftOver)
    question.qType = 'shortAnswer'
    return question
}

const noCarry = {
    2: [1, 2, 3, 4],
    3: [1, 2, 3],
    4: [1, 2]
}
const busStopSetup = (qName) => {
    let ans, divisor;
    if (qName === 'noCarry1') {
        divisor = rFuncs.randomInt(3) + 2
        ans = [1, 2, 3, 4].map(x => rFuncs.randomElement(noCarry[divisor])).join('')
        ans = Number(ans)
    } else if (qName === 'noCarry2') {
        divisor = rFuncs.randomInt(8) + 2
        ans = [1, 2, 3].map(x => '0' + (rFuncs.randomInt(8) + 2)).join('')
        ans = Number(ans)
    } else {
        divisor = rFuncs.randomInt(8) + 2
        ans = rFuncs.randomInt(980) + 17
    }
    let leftOver = rFuncs.randomInt(divisor - 1) + 1
    // let person = rFuncs.randomNames(1)[0]
    return busStopQ(qName, ans, divisor, leftOver)
}

module.exports = {
    sectionName: 'busStop',
    qGetter: busStopSetup
}