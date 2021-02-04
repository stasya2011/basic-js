const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
 // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  
 let curr = "";
 let  addition = "";
 if(typeof str != "string"){
   str.toString();
 }
 curr+=str;
 
  options.addition ? addition+=options.addition : addition+="";

  let regExp;  
  if(options.additionSeparator){
    regExp = new RegExp(`\\${options.additionSeparator}$`);
    addition+=options.additionSeparator;
  }else{
    regExp = /\|$/;
    addition+="|";
  }
  
  options.additionRepeatTimes ? addition = addition.repeat(+options.additionRepeatTimes) : addition; 
  addition = addition.replace(regExp, "");
  curr += addition;
  
  let regExPP;
  if(options.separator){
    if(/\w\d/gi.test(options.separator)){
      regExPP = new RegExp(`${options.separator}$`);
    }else{
      regExPP = new RegExp(`\${options.separator}$`);
    }   
    curr+=options.separator;    
  }else{
    regExPP= /\+$/;
    curr+="+";
  }

  options.repeatTimes ? curr = curr.repeat(+options.repeatTimes) : curr;
 
  
  if(options.separator){
    let del = options.separator.length;
    curr = curr.substr(0, curr.length-del);
  }else{
    curr = curr.substr(0, curr.length-1);
  }

  return curr;
};
  