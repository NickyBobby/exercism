function Binary(str) {
  this.str = str;
}

Binary.prototype.toDecimal = function() {
  if (this.str.match(/[^10]/)) {
    return 0;
  } else {
    return this.str.split('').reverse().reduce(
      function(total, bin, power) {
        return total + bin * Math.pow(2, power);
      }, 0
    );
  }
}

module.exports = Binary;
