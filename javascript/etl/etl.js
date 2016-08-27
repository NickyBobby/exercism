function ETL(input) {
}

ETL.prototype.transform = function(input) {
  var result = {};
  var newKey = '';
  for (var key in input) {
    for (var i = 0, len = input[key].length; i < len; i++ ) {
      newKey = input[key][i].toLowerCase();
      result[newKey] = Number(key);
    }
  }
  return result;
}

module.exports = ETL;
