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
  let arr = [];
  for (let i = 0; i < n.toString().length; i += 1) {
      arr.push(n.toString().substring(0, i) + n.toString().substring(i + 1));
  }
  let arr1 = arr.map((x) => x.replace(/[,]/g, ''));
  arr1 = arr1.map((x) => x.startsWith('0') ? x.slice(1) : x);
  console.log(arr1);
  arr1 = arr1.map((x) => Number(x));
  arr1.sort((a, b) => a - b);
  return arr1[arr1.length-1]
}

module.exports = {
  deleteDigit
};

