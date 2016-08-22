var Hamming = function() {};

Hamming.prototype.compute = function(strand_a, strand_b) {
  if (strand_a.length === strand_b.length) {
    chars_a = strand_a.split('');
    chars_b = strand_b.split('');
    return countDifference(chars_a, chars_b);
  } else {
    throw { name: 'WrongLength', message: 'DNA strands must be of equal length.' };
  }
};

function countDifference(chars_a, chars_b) {
  var count = 0;
  chars_a.map(function (e, i) {
    if (chars_a[i] !== chars_b[i]) {
      count++;
    }
  });
  return count;
}

module.exports = Hamming;
