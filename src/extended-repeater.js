const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  function repeat(string, times, sep) {
    let resultRepeat = `${string}`;
    for (let i = 1; i < times; i += 1) {
      resultRepeat += sep + `${string}`;
    }
    return resultRepeat;
  }

  function repeatWithAdd(string, times, sep, add) {
    let resultRepeat = `${string}` + `${add}`;
    for (let i = 1; i < times; i += 1) {
      resultRepeat += sep + `${string}` + `${add}`;
    }
    return resultRepeat;
  }

  if ('addition' in options) {
     if (!'additionRepeatTimes' in options) {
        var addRepTimes = 1;
     }
     else {
        var addRepTimes = options.additionRepeatTimes;
     }
     if ('additionSeparator' in options) {
        var addSep = options.additionSeparator;
     }
     else {
        var addSep = '|';
     }
     var addText = repeat(options.addition, addRepTimes, addSep);
     console.log(addText);
  }

  if ('addition' in options) {
     if ('separator' in options) {
        return repeatWithAdd(str, options.repeatTimes, options.separator, addText);
    }
    else {
      if (!('additionSeparator' in options) && ('additionRepeatTimes' in options)) {
          
        console.log(1);
        return repeatWithAdd(str, options.repeatTimes, '+', addText);
      }
      else {
        return repeatWithAdd(str, options.repeatTimes, '+', addText);
      }
    }
  }
  else {
    if ('separator' in options) {
     return repeat(str, options.repeatTimes, options.separator);
    }
    else {
      return repeat(str, options.repeatTimes, '+');
    }
  }
}


module.exports = {
  repeater
};
