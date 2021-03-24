//const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members) || members.length == 0) {
    return false;
  }
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] != 'string' || members[i] == " ") {
      members.splice(i, 1);
      i--;
    }
  }
  let arr = [];
  let teamName = [];
  for (let j = 0; j < members.length; j++) {
    arr = members[j].split('');
    for (let k = 0; k < arr.length; k++) {
      if (arr[k] != " ") {
        teamName.push(arr[k].toUpperCase());
        break;
      }
    }
    arr = [];
  }
  teamName.sort();
  let str = teamName.join('');
  return str;
};
