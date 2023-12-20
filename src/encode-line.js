const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let result = '';
  for (let i = 0; i < arr.length;){
    let count = 0;
    for (let j = i; j < arr.length; j += 1) {
        if (arr[i] === arr[j]) {
            count += 1;
        }
        if (arr[i] !== arr[j + 1]) {
          break;
      }
    }
    if (count !== 1) {
        result += count + arr[i];
    }
    else {
        result += arr[i]
    }
    i += count;
  }
  return result;
}

module.exports = {
  encodeLine
};
