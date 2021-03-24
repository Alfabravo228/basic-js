//const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(/*date*/) {
  if (date == "" || date == " " || date == null) {
    return 'Unable to determine the time of year!';
  }
  let year;
  let month;
  let day;
  try {
    year = date.getFullYear();
    if (year <= 1970) {
      return new Error("THROWN");
    }
    month = date.getMonth();
    day = date.getDate();
    console.log(year, month, day);
    if (month >= 0 && month < 2 || month == 11) {
      return "winter";
    } else if (month >= 2 && month < 5) {
      return "spring";
    } else if (month >= 5 && month < 8) {
      return "summer";
    } else if (month >= 8 && month < 10) {
      return "autumn";
    }
  } catch {
    return new Error("THROWN");
  }
};
// const springDate = new Date(1972, 6, 14, 22, 29, 14, 719);
// console.log(getSeason(springDate));