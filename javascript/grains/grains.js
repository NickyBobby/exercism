var BigInt = require('./big-integer')

function Grains() {

}

Grains.prototype.square = function(num) {
  return BigInt(2).pow(num - 1).toString();
}
Grains.prototype.total = function() {
  return BigInt(2).pow(64).prev().toString();
}

module.exports = Grains;
