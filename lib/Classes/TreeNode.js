const { QMaker } = require("./QMaker")
const { ArgMaker } = require("./ArgMaker")

function TreeNode(parent, qMaker, essentialKnowledge = false) {
  this.parent = parent
  this.qMaker = qMaker
  this.essentialKnowledge = essentialKnowledge
  this.children = []
}

TreeNode.prototype.getChild = function (c) {
  let { qMaker, args } = this.children[c]
  return qMaker.makeQ(...args)
}

TreeNode.prototype.addChild = function (qMaker, args) {
  this.children.push({ qMaker, args })
}

// informal testing:

const qFormater = (a, b) => {
  return {
    q: `Calculate ${a} + ${b}`,
    a: a + b
  }
}

const validateArgs = (a, b) => (a + b) % 10 === 0

const sumToTarget = (target) => {
  let a = 1 + randomInt(9)
  return [a, target - a]
}

let sumTwoNums = new QMaker(qFormater, sumToTarget, validateArgs)
q = sumTwoNums.makeQ(6, 14)
console.log(q)
