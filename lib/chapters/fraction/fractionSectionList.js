const simplify = require('./fractionSimplify');
const ofAmount = require('./fractionOfAmount');
const compare = require('./fractionCompare');
const add = require('./fractionAdd');
const multiply = require('./fractionMultiply');

exports.fractionSectionList = {
    simplify, ofAmount, compare, 
    add, multiply
}