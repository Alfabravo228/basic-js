//const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity != 'string' || sampleActivity == "" || sampleActivity == " " || isNaN(+sampleActivity) || !isFinite(+sampleActivity) || +sampleActivity == 0 || +sampleActivity > 14.9999 || +sampleActivity < 0) {
    return false;
  }
  console.log(+sampleActivity)
  let k = 0.693 / HALF_LIFE_PERIOD;
  let log = Math.log(sampleActivity / MODERN_ACTIVITY);
  let time = log / k;
  if (time < 0) {
    time *= -1;
  }
  return Math.ceil(time);
};
