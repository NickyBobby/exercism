function keep(arr, func) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function discard(arr, func) {
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

module.exports = {
  keep: keep,
  discard: discard
}
