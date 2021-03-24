//const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  arrReverse: [],
  getLength() {
    let length = 0;
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] != '~~') {
        length++;
      }
    }
    return length;
  },
  addLink(value) {
    if (value == false) {
      this.arr.push(`(${value})`);
      this.arr.push('~~');
    } else if (value == '' || value === undefined) {
      this.arr.push('( )');
      this.arr.push('~~');
    } else {
      this.arr.push(`(${value})`);
      this.arr.push('~~');
    }
    return this;
  },
  removeLink(position) {
    let j = 0;
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] != '~~') {
        j++;
      }
      if (j == position) {
        this.arr.splice(i, 2);
        break;
      }
    }
    if (j < position) {
      throw new Error();
    }
    return this;
  },
  reverseChain() {
    for (let i = 0; i < this.arr.length; i++) {
      this.arrReverse.unshift(this.arr[i]);
    }
    this.arrReverse.splice(0, 1);
    this.arrReverse.push('~~');
    this.arr = this.arrReverse;
    this.arrReverse = [];
    return this;
  },
  finishChain() {
    this.arr.pop();
    let stringChain = this.arr.join('');
    return stringChain;
  }
};
// console.log(chainMaker
//   .addLink()
//   .addLink(null)
//   .finishChain()
// );
//console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());
module.exports = chainMaker;
