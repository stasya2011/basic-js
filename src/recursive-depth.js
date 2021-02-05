const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.deep = 1;
    this.currentDeep = 1;
}
calculateDepth(arr) {
    arr.forEach((el) => {
        if (!Array.isArray(el)) {
            this.currentDeep;
        }else{
          this.currentDeep++;
            this.calculateDepth(el);
        }
    });
  
    return this.currentDeep;
  }
};