const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if ( !Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
   }
   
   let array = [];
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] === '--discard-next' || arr[i] === '--discard-prev' || arr[i] === '--double-next' || arr[i] === '--double-prev') {
                        if (arr[i] === '--discard-next') {
                            if (i != (arr.length - 1)) {
                                i++
                            }
                        }
                        if (arr[i] === '--discard-prev') {
                            if (i != 0 || arr[(i - 1)] != '--discard-next') {
                                array.splice((i - 1), 1)
                            }
                        }
                        if (arr[i] === '--double-next') {
                            if (i != (arr.length - 1)) {
                                // array.splice((i - 1), 0, arr[(i + 1)])
                                array.push(arr[(i + 1)])
                            }
                        }
                        if (arr[i] === '--double-prev') {
                            if (i != 0) {
                                array.push(arr[(i - 1)])
                                if (arr[(i - 2)] == '--discard-next') {
                                    array.splice((i - 2), 1);
                                }
                            }
                        }
                    } else {
                        array.push(arr[i]);
                    }
                }
                return array
            }

module.exports = {
  transform
};
