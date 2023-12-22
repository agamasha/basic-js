const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  function sum(n) {
      let array = n.toString().split('');
      let res = 0;
      for (let i = 0; i < array.length; i += 1) {
          res += Number(array[i]);
          console.log(res);
      }
    if (res.toString().length === 1) {
      return res;
    }
    else {
        console.log(1);
        return sum(res);
    }
  }
  return sum(n);
}

module.exports = {
  getSumOfDigits
};
