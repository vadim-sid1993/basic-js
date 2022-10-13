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
            let arr1 = [];
            for (let i = 0; i < arr.length; i++) {
                let x = [];
                for (let j = 0; j < arr.length; j++) {
                    if (j != i) {
                        x.push(arr[j])
                    }
                }
                let y = +x.join('');
                arr1.push(y)
            }
            let max = arr1.length ? arr1[0] : 0;
            for (i = 0; i < arr1.length; i++) {
                if (arr1[i] > max) {
                    max = arr1[i];
                }
            }
            return max;
}
module.exports = {
  deleteDigit
};
