function PhoneNumber(number) {
  this.p_number = number;
}

PhoneNumber.prototype.number = function() {
  var clean_num = this.p_number.replace(/[() -.]/g, '');
  if (clean_num.length === 10) {
    return clean_num;
  } else if (clean_num.length === 11 && clean_num.charAt(0) === '1') {
    return clean_num.slice(1);
  } else {
    return '0000000000';
  }
}

PhoneNumber.prototype.areaCode = function() {
  return this.p_number.slice(0,3);
}

PhoneNumber.prototype.toString = function() {
  var num = this.p_number;
  var area = num.slice(0,3);
  var city = num.slice(3,6);
  var personal  = num.slice(6,10);
  return `(${area}) ${city}-${personal}`;
}

module.exports = PhoneNumber;
