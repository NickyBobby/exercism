function Accumulate(arr, func) {
  var result = []
  for (var i = 0; i < arr.length; i++) {
    result.push(func(arr[i]))
  }
  return result;
}

module.exports = Accumulate
