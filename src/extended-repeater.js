const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
 //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  
  if (options.separator == undefined) {
    options.separator = '+';
  }
  if (options.additionSeparator == undefined) {
    options.additionSeparator = '||';
  } 

  let result = '';
  if (options.repeatTimes == undefined) {
    return (result = str + options.addition);
  } 
  for (let i = 0; i < options.repeatTimes; i++) {


    if (i == options.repeatTimes - 1) {
      options.separator = '';
    }
    
    let addSep = options.additionSeparator;
    let addStr= '';

    for (let k = 0; k < options.additionRepeatTimes; k++) {
      if (k == options.additionRepeatTimes - 1) {
          addSep  = '';
      }

      addStr += options.addition +addSep ;
    }

    result +=str + addStr + options.separator;
  }
  
  return result;
};
  