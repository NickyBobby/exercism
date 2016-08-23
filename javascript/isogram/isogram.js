var Isogram = function(word) {
  this.word = word;
}

Isogram.prototype.isIsogram = function() {
  var letterHash = {};
  var letterArray = this.word.split('');
  for (var i = 0, len = letterArray.length; i < len; i++) {
    if (!letterArray[i].match(/[ -]/g)) {
      var letter = letterArray[i].toLowerCase();
      if (letterHash.hasOwnProperty(letter)) {
        return false;
        } else {
        letterHash[letter] = 1;
        }
      }
    }
  return true;
}

module.exports = Isogram;
