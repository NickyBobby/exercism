var DnaTranscriber = function() {}

DnaTranscriber.prototype.toRna = function(inputDna) {
  var str = ''
  for (var i = 0, len = inputDna.length; i < len; i++) {
      str += dnaToRna[inputDna[i]];
    }
  return str
}

var dnaToRna = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
}

module.exports = DnaTranscriber;
