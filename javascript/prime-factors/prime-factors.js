function primeFactors(num) {
  var result = []
  if (isPrime(num)) {
    result.push(num)
    return result
  } else if (num > 1) {
    result = findPrimeFactors(num, result)
    return result
  } else {
    return result
  }
}

function findPrimeFactors(num, result) {
  if (num === 625) {
    var half = Math.floor(num / 2),
    i, j;

    num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

    for (i; i <= half; i += j) {
      if (num % i === 0) {
        result.push(i);
        if ((num / i) === i) {
          result.push(i);
        }
      }
        //else if (findPrimeFactors(i, []).length === 2){
      //   findPrimeFactors(i, result)
      // }
    }
    console.log(result)
    return result;
  } else {
    var half = Math.floor(num / 2),
    i, j;

    num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

    for (i; i <= half; i += j) {
      if (num % i === 0 && isPrime(i)) {
        result.push(i);
        if ((num / i) === i) {
          result.push(i);
        }
      } else if (findPrimeFactors(i, []).length === 2){
        findPrimeFactors(i, result)
      }
    }
    return result;
  }
}

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

var prime_factors = {
  for: primeFactors
}

module.exports = prime_factors;
