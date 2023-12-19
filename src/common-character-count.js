const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const a1 = s1.split('');
  const a2 = s2.split('');
  for (let i = 0; i < a1.length; i += 1) {
    for (let j = 0; j < a2.length; j += 1) {
      if (a1[i] === a2[j]) {
        console.log(a2[j]);
        count += 1;
        a1[i] = '$';
        a2[j] = '';
        console.log(a2);
      }
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
