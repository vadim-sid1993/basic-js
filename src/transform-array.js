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
    throw new Error('arr parameter must be an instance of the Array!');
   }
   let arr2 = [];
   for (i=0; i<arr.length; i++) {
       arr2.push(i)
   }
   for (i=0; i<arr2.length; i++) {
       switch(i) {
           case '--discard-next':
              if (i<=arr2.length-1) break;
              arr2.splice(i, 2);
              break;
           case '--discard-prev':
              if (i=0) break;
              arr2.splice((i-1), 2);
              break;  
           case '--double-next':
              if (i<=arr2.length-1) break;
              arr2.splice(i, 1, (i+1));
              break;
           case '--double-prev':
              if (i=0) break;
              arr2.splice(i, 1, (i-1));
              break; 
       }
   }
   return arr2;
}

module.exports = {
  transform
};
