//const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr) || arr.length == 0) {
    return 'THROWN';
  }
  let tArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--discard-next') {
      if (arr[i + 2] == '--double-prev' || arr[i + 2] == '--discard-prev') {
        i += 2;
        continue;
      }
      if (arr[i + 1] == undefined) {
        return tArr;
      }
      i++;
    } else if (arr[i] == '--discard-prev') {
      if (arr[i - 1] == undefined) {
        continue;
      }
      tArr.splice(i - 1, 1);
    } else if (arr[i] == '--double-next') {
      if (arr[i + 1] == undefined) {
        return tArr;
      }
      tArr.push(arr[i + 1]);
    } else if (arr[i] == '--double-prev') {
      if (arr[i - 1] == undefined) {
        continue;
      }
      if (arr[i - 2] == '--discard-next') {
        tArr.push(arr[i - 3]);
      }
      else {
        tArr.push(arr[i - 1]);
      }
    }
    else {
      tArr.push(arr[i]);
    }
  }
  return tArr;
};

//console.log(transform(['']));