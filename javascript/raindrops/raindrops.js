function Raindrops() {

};

Raindrops.prototype.convert = function(num) {
  if (num % 3 === 0) {
    if (num % 5 === 0 && num % 7 === 0) {
      return 'PlingPlangPlong';
    } else if (num % 7 === 0) {
      return 'PlingPlong';
    } else if (num % 5 === 0) {
      return 'PlingPlang';
    } else {
      return 'Pling';
    }
  } else if (num % 5 === 0) {
    if (num % 7 === 0) {
      return 'PlangPlong';
    } else {
      return 'Plang';
    }
  } else if (num % 7 === 0) {
    return 'Plong';
  } else {
    return num.toString();
  }
};

module.exports = Raindrops;
