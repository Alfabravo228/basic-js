//const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bool) {
    this.bool = bool;
    if (bool == true || bool == null) {
      this.f = false;
    } else {
      this.f = true;
    }
  }
  encrypt(str, key) {
    if (str == null || str == '' || key == null || key == '') {
      throw new Error("Absence argument");
    }
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arrKey = Array.from(key.toLowerCase());
    let arrROTN = [];
    for (let i = 0; i < arrKey.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (arrKey[i] == alphabet[j])
          arrROTN.push(j);
      }
    }
    let arrString = Array.from(str.toLowerCase());
    let ROTN;
    let m;
    let n = 0;
    for (let i = 0; i < arrString.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (arrString[i] == alphabet[j]) {
          m = arrROTN[n];
          ROTN = m + j;
          if (ROTN > 25) {
            let temp = ROTN - 26;
            ROTN = temp;
          }
          arrString[i] = alphabet[ROTN];
          if (n + 1 == arrROTN.length) {
            n = 0;
          } else {
            n++;
          }
          break;
        }
      }
    }
    if (this.f) {
      let arr2 = [];
      for (let i = 0; i < arrString.length; i++) {
        arr2.unshift(arrString[i]);
      }
      arrString = arr2;
    }
    return arrString.join('').toUpperCase();
  }
  decrypt(str, key) {
    if (str == null || str == '' || key == null || key == '') {
      throw new Error("Absence argument");
    }
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arrKey = Array.from(key.toLowerCase());
    let arrROTN = [];
    for (let i = 0; i < arrKey.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (arrKey[i] == alphabet[j])
          arrROTN.push(j);
      }
    }
    let arrString = Array.from(str.toLowerCase());
    let ROTN;
    let m;
    let n = 0;
    for (let i = 0; i < arrString.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (arrString[i] == alphabet[j]) {
          m = arrROTN[n];
          ROTN = - m + j;
          if (ROTN < 0) {
            let temp = ROTN;
            ROTN = 26 + ROTN;
          }
          arrString[i] = alphabet[ROTN];
          if (n + 1 == arrROTN.length) {
            n = 0;
          } else {
            n++;
          }
          break;
        }
      }
    }
    if (this.f) {
      let arr2 = [];
      for (let i = 0; i < arrString.length; i++) {
        arr2.unshift(arrString[i]);
      }
      arrString = arr2;
    }
    return arrString.join('').toUpperCase();
  }
}
// const directMachine = new VigenereCipheringMachine();
// console.log(directMachine.encrypt('Same length key', 'Samelengthkey'));
// console.log(directMachine.decrypt('Samelengthkey', 'Samelengthkey'));
module.exports = VigenereCipheringMachine;

