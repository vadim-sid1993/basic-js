const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let str = String(n);
  let arr = str.split('');
  let min = arr.length ? arr[0] : 0;
  for (i=0; i<arr.length; i++) {
    if (arr[i]<min) {
      min = arr[i];
    }
  }
  for (i=0; i<arr.length; i++) {
    if (arr[i]==min) {
      arr.splice(i, 1);
      break;
    }
  }
  let number = +arr.join();
  return number
}

module.exports = {
  deleteDigit
};
