const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code 
  if (!date) {
  return ("Unable to determine the time of year!");
  } else {

    if (Object.prototype.toString.call(date) === '[object Date]') {
      let month = date.getMonth();
      console.log(month)
      if ((month == 0 || month == 1 || month == 11)) {
        return "winter";
      } else if ((month == 3 || month == 4 || month == 2)) {
        return "spring";
      } else if (month == 5 || month == 6 || month == 7) {
        return "summer";
      } else {
        return "autumn";
      }
    } 
    else {
      throw new Error("Error");
    }
  }
};
