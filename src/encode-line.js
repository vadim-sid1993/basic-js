const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let total = [];
  let num = 1;
  for(let i = 0; i < str.length; i++) {
      if (i === 0) {
          total.push(str[0])
      } else if (total[total.length - 1].includes(str[i])) {
          num += 1;
          total[total.length - 1] = `${num}${str[i]}`;  
      } else {
          total.push(str[i]);
          num = 1;
      }
  }
  return total.join('');
}

module.exports = {
  encodeLine
};
