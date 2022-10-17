const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {

    this.chain.length
    return this
  },

  addLink(value) {
    if (value === "") {
      this.chain.push('(  )')
    } else {
      this.chain.push('( ' + value + ' )')
    }
    return this
  },

  removeLink(position) {


    if (!Number.isInteger(position) || position < 1 || position > this.chain.length) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice((position - 1), 1);
      return this
    }
  },

  reverseChain() {
    this.chain.reverse()
    return this
  },

  finishChain() {
    let total = this.chain.join('~~')
    this.chain = []
    return total
  }
};
module.exports = {
  chainMaker
};

module.exports = {
  chainMaker
};

