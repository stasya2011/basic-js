const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
 //throw new CustomError('Not implemented');
  // remove line with error and write your code here


  if (options.repeatTimes == undefined) {
    return (result = str + options.addition);
  } 
 let curr = "";
 let  addition = "";
 if(typeof str != "string"){
   str.toString();
 }
 curr+=str;
 
  options.addition ? addition+=options.addition : addition+="";

  let regExp;  
  if(options.additionSeparator){
    addition+=options.additionSeparator;
  }else{
    regExp = /\|$/;
    addition+="|";
  }
  
  options.additionRepeatTimes ? addition = addition.repeat(+options.additionRepeatTimes) : addition; 
  if(regExp){
    addition = addition.replace(regExp, "");
  }else{
    addition = addition.substr(0, options.additionSeparator.length-1);
  }
  
  curr += addition;
  

  if(options.separator){     
    curr+=options.separator;    
  }else{   
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
  