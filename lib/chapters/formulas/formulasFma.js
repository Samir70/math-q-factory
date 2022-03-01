const rFuncs = require('../../nonQ/randFuncs');
const { wrapMJax } = require('../../nonQ/formatFuncs');

// qPathList expects: 
// ['findForce-100', 'findMass-150', 'findAcc-150']
const selector = {
    findForce: (force, mass, accel) => {
        return {
            q: `Find the force required to give an object of mass ${mass}Kg an acceleration of ${accel}m/${wrapMJax('s^2')} \n(Include units in your answer)`,
            a: force+'N',
            hints: [
                'The formula needed is F=ma',
                `The unit for force is Newtons`,
                `The formula tells us that, to find the force, multiply the mass by the acceleration`
            ],
            qFeedback: `Force = ${mass} x ${accel} = ${force}N`
        }
    },
    findMass: (force, mass, accel) => {
        return {
            q: `A force of ${force}N is applied to a mass, giving it an acceleration of ${accel}m/${wrapMJax('s^2')}. \nHow many kilograms in the mass? \n(Include units in your answer)`,
            a: mass+'Kg',
            hints: [
                'The formula needed is F=ma',
                'The units for mass will be Kg',
                `Put the values given in the question into the formula, then find the mass`,
                `The formula gives us: ${force} = mass x ${accel}`
            ],
            qFeedback: `Mass = ${force} / ${accel} = ${mass}Kg`
        }
    },
    findAcc: (force, mass, accel) => {
        return {
            q: `A force of ${force}N is applied to a mass of ${mass}Kg. \nFind the acceleration. (Units not needed)`,
            a: accel,
            hints: [
                'The formula needed is F=ma',
                `Put the values given in the question into the formula, then find the acceleration`,
                `The formula gives us: ${force} = ${mass} x acceleration`
            ],
            qFeedback: `accel = ${force} / ${mass} = ${accel}m/${wrapMJax('s^2')}`
        }
    }
}

// set up the randomly set variables here and pass them as arguments to above functions
// if the above are using very different sets of variables, 
// then maybe they need to be split into different sections
const sectionSetup = (qName) => {
    if (selector[qName] === undefined) {
        return { q: 'Default formulas-F=ma Q' }
    }
    let mass = rFuncs.randomInt(10) * 5 + 5;
    let accel = rFuncs.randomInt(10) + 4;
    let force = mass * accel;
    return {
        qType: 'shortAnswer',
        ...selector[qName](force, mass, accel)
    }
}

module.exports = {
    sectionName: 'F=ma',
    qGetter: sectionSetup
}