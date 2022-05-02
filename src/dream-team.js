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
  let y = [];
  if (Array.isArray(array) === true) {
    for (i = 0; i < array.length; i++) {
      if (typeof (array[i]) == "string") {
        x.push(array[i])
      }
    }
    for (i = 0; i < x.length; i++) {
      if (x[i] == ' ') {
        x.splice(i, 1)
      }
    }
    for (i = 0; i < x.length; i++) {
      let z = x[i].toUpperCase().split('');
      y.push(z[0]);
    }
    y.sort();
    let nameTeam = y.join('');
    return nameTeam
   } else {
    return false
  }
}

module.exports = {
  createDreamTeam
};
