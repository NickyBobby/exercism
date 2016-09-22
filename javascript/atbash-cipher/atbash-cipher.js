var alphabet = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
var reverseAlpha = '0987654321abcdefghijklmnopqrstuvwxyz'.split('').reverse();

function Encode(input) {
  var inputArr = input.split('');
  var result = []
  for(var i = 0; i < inputArr.length; i++) {
    var index = alphabet.indexOf(inputArr[i].toLowerCase());
    result.push(reverseAlpha[index])
  }
  return result.join('')
}


module.exports = {
  encode: Encode
}
