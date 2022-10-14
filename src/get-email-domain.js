const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = email.split('').reverse();
  let dom = [];
  outer: for (let i = 0; i < arr.length; i++) {
      if (arr[i] != '@') {
          dom.push(arr[i])
      } else {
          break outer;
      }
  }
  dom.reverse();
  let domain = dom.join('');
  return domain
}

module.exports = {
  getEmailDomain
};
