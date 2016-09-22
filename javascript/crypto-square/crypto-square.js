function Crypto(word) {
  this.word = word.toLowerCase()
}

Crypto.prototype.normalizePlaintext = function() {
  return this.word.replace(/[ ,.!\#\$\%\^\&]/g, '')
}

Crypto.prototype.size = function() {
  return Math.ceil(Math.sqrt(this.normalizePlaintext().length))
}

Crypto.prototype.plaintextSegments = function() {
  var normal = this.normalizePlaintext();
  var segment = this.size();
  var start = 0;
  var end = 0;
  var result = [];
  for (var i = 0; i < segment; i++) {
    end += segment;
    result.push(normal.slice(start, end));
    start += segment;
  }
  if (result.slice(-1)[0] === '') {
    result.pop()
  }
  return result;
}

Crypto.prototype.ciphertext = function() {
  var arr = this.plaintextSegments();
  var segment = this.size();
  var result = '';
  for (var i = 0; i < this.size(); i++) {
    for (var g = 0; g < this.size(); g++) {
      if (arr[g][i]) {
        result += arr[g][i];
      }
    }
  }
  return result;
}

module.exports = Crypto;
