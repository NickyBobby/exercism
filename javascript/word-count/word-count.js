
var Words = function() {}

Words.prototype.count = function(input) {
  var wordCount = {};
  var wordArray = makeWordArray(input);
  for (var i = 0, len = wordArray.length; i < len; i++) {
    var word = wordArray[i].toLowerCase();
    if (word !== "" && !word.includes('\t') && word !== 'constructor') {
      wordCount = makeHash(wordCount, word)
    } else if (word !== "") {
      var new_word = word.replace(/[\t]/g, "");
      wordCount = makeHash(wordCount, new_word)
    }
  }
  return wordCount;
}

function makeWordArray(input) {
  if (input.includes(' ')) {
    return input.split(' ');
  } else if (input.includes('\n')) {
    return input.split('\n');
  } else if (input.includes('\t')) {
    return input.split('\t');
  } else {
    return input.split();
  }
}

function makeHash(hash, word) {
  if (hash.hasOwnProperty(word)) {
    hash[word]++;
    return hash;
  } else {
    hash[word] = 1;
    return hash;
  }

}

module.exports = Words;
