const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(array) {
  // throw new NotImplementedError('Not implemented');
  let x = [];
  // let y = [];
  if (Array.isArray(array) === true) {
    for (i = 0; i < array.length; i++) {
      if (typeof (array[i]) == "string") {
        let a = array[i].trim().toUpperCase();
        x.push(a[0])
      }
    }
     x.sort();
    let nameTeam = x.join('');
    return nameTeam
   } else {
    return false
  }
}

module.exports = {
  createDreamTeam
};
