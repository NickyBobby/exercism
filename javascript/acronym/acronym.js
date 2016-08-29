function parse(str) {
  // var arr = str.replace(/[-]/g, ' ').split(/\W+/);
  // var result = ''
  // for (var i = 0; i < arr.length; i++) {
  //   result += arr[i].slice(0, 1).toUpperCase()
  // }
  // return result;
  return str.split(/\W+/)
        .map(function(word) {
            firstChar = word.charAt(0).toUpperCase();
            if(word.match(/^[A-Z]+$/)) {
                return firstChar;
            }
            return firstChar + word.slice(1).replace(/[^A-Z]/g,"");
        })
        .join('');
}
module.exports.parse = parse;
