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
function createDreamTeam(/* members */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let x = [];
  let y = [];
  if (Array.isArray(members)) {
    for (i = 0; i < members.length; i++) {
      if (typeof (members[i]) == "string") {
        x.push(members[i])
      }
    }
    for (i = 0; i < x.length; i++) {
      if (x[i] == ' ') {
        x.splice(i, 1)
      }
    }
    for (i = 0; i < x.length; i++) {
      let z = x[i].split('')
      y.push(z[0])
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
