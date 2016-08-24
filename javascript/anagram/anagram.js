function Anagram(word) {
  this.word = word;
}

Anagram.prototype.matches = function() {
  var list = makeList(arguments);
  var result = [];
  var wordArr = makeListArray(makingHash(this.word));
  for (var i = 0, len = list.length; i < len; i++) {
    var checkWordArr = makeListArray(makingHash(list[i]));
    if (wordArr === checkWordArr && this.word.toLowerCase() !== list[i].toLowerCase()) {
      result.push(list[i]);
    }
  }
  return result;
}

function makeListArray(hash) {
  var arr = Object.keys(hash).map(function(key) {
    return `${key} - ${hash[key]}`
  })
  return arr.sort().toString();
}

function makingHash(word) {
  var wordArr = word.toLowerCase().split('');
  var wordHash = {}
  for (var i = 0, len = wordArr.length; i < len; i++) {
    wordHash = makeHash(wordHash, wordArr[i]);
  }
  return wordHash;
}

function makeList(arguments) {
  var list = []
  if (arguments[0].constructor === Array) {
    list = arguments[0];
  } else {
    for (var i = 0, len = arguments.length; i < len; i++) {
      list.push(arguments[i])
    }
  }
  return list;
}

function makeHash(hash, letter) {
  if (hash.hasOwnProperty(letter)) {
    hash[letter]++;
    return hash;
  } else {
    hash[letter] = 1;
    return hash;
  }
}

module.exports = Anagram;
