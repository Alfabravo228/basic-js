//const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 2 ** disksNumber - 1;
  let seconds = Math.floor((turns / turnsSpeed * 3600));
  let obj = {
    turns: turns,
    seconds: seconds,
  }
  return obj;
};

// console.log(calculateHanoi(7, 122));