//const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, obj = {
  addition: '',
  separator: '+',
  additionSeparator: '|',
  repeatTimes: 0,
  additionRepeatTimes: 0,
}) {
  let string = String(str);
  let addition = String(obj.addition);
  let mainString = [];
  let addString = [];
  if (obj.additionRepeatTimes == 0) {
    addString.push(`${addition}`);
  } else {
    for (let i = 0; i < obj.additionRepeatTimes; i++) {
      if (i == obj.additionRepeatTimes - 1) {
        addString.push(`${addition}`);
      } else {
        addString.push(`${addition}${obj.additionSeparator}`);
      }
    }
  }
  addString = addString.join('');
  if (obj.repeatTimes == 0) {
    mainString.push(`${string}${addString}`);
  } else {
    for (let i = 0; i < obj.repeatTimes; i++) {
      if (i == obj.repeatTimes - 1) {
        mainString.push(`${string}${addString}`);
      } else {
        mainString.push(`${string}${addString}${obj.separator}`);
      }
    }
  }
  return mainString.join('');
}