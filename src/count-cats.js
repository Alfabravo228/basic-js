//const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (!Array.isArray(matrix) || matrix.length == 0) {
    return 0;
  }
  let cats = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '^^') {
        cats.push(matrix[i][j]);
      }
    }
  }
  return cats.length;
}