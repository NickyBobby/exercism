var Pangram = function(string) {
  this.string = string
}

Pangram.prototype.isPangram = function() {
  var alpha = "abcdefghijklmnopqrstuvwxyz".split('');
  for (var i = 0, len = alpha.length; i < len; i++) {
    if (!this.string.toLowerCase().includes(alpha[i])) {
      return false;
    }
  }
  return true;
}

module.exports = Pangram;
