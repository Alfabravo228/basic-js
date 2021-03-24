//const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor(arr) {
    this.arr = arr;
  }
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      if (arr.length == 0) {
        return 1;
      }
      return 1 + Math.max(...arr.map(x => this.calculateDepth(x)));
    } else {
      return 0;
    }
  }
};