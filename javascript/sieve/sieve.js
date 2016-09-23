function Sieve(num) {
  this.primes = primeNums(num)
}

function primeNums(num) {
  var result = [2];
  for(var i = 3; i <= num; i++) {
    if (isPrime(i)) {
      result.push(i)
    }
  }
  return result;
}

function isPrime(value) {
  for(var i = 2; i < value; i++) {
    if(value % i === 0) {
        return false;
    }
  }
  return value > 1;
}

module.exports = Sieve;
