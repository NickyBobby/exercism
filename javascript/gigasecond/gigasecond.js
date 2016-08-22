var Gigasecond = function(birthdate) {
  this.birthdate = birthdate
}

Gigasecond.prototype.date = function() {
  return new Date(this.birthdate.getTime() + Math.pow(10, 12))
}

module.exports = Gigasecond;
