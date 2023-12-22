const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let count = [];
  for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] !== -1) {
          count.push(arr[i]);
      }
  }
  count.sort(function (a, b) {
  return a - b;
});
  let arrRes = [];
  var m = 0;
  for (let j = 0; j < arr.length; j += 1) {
      if (arr[j] === -1) {
          m += 1;
          arrRes.push(arr[j]);
      }
      else {
          arrRes.push(count[j - m]);
      }
  }
  return arrRes;
}

module.exports = {
  sortByHeight
};
