function Cipher() {
  this.key = 'abcdefghijklmnopqrstuvwxyz'
}

Cipher.prototype.encode = function(input) {
  return this.key.slice(0, input.length)
}

module.exports = Cipher
