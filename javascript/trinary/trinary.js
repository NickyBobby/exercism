function Trinary(trit) {
  this.trit = trit;
}

Trinary.prototype.toDecimal = function() {
  if (isNaN(this.trit)) {
    return 0
  } else {
    return this.trit.split('').reduce(function(total, trit) {
      return total * 3 + Number(trit)
    }, 0)
  }
}

module.exports = Trinary;
