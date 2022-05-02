const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2 ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  s2 = s2.split('');
  let count = 0;
  
  for (let i = 0; i < s1.split('').length; i++) {
      if (s2.includes(s1[i])) {
          s2.splice(s2.indexOf(s1[i]), 1);
          count++;
      }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
