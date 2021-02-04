const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(/* sampleActivity */) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  let result;
  if(typeof sampleActivity == "object" || typeof sampleActivity ==  "number"){
      return false;
  }

  if(sampleActivity && parseFloat(sampleActivity) && (sampleActivity>0 && sampleActivity<MODERN_ACTIVITY)){        
      result = Math.ceil((Math.log((MODERN_ACTIVITY / sampleActivity)) / 0.693) * HALF_LIFE_PERIOD);
      return result;
  }else{
       return false;
  }
  
};
