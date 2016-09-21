function Allergies(num) {
  this.num = num;
  this.al = [];
  this.alNum = 256
};

var allergies = {
  1:   'eggs',
  2:   'peanuts',
  4:   'shellfish',
  8:   'strawberries',
  16:  'tomatoes',
  32:  'chocolate',
  64:  'pollen',
  128: 'cats',
};

Allergies.prototype.list = function() {
  this.alNum = this.alNum / 2;
  if (this.num >= this.alNum && this.alNum >= 1) {
    this.al.unshift(allergies[this.alNum]);
    this.num -= this.alNum;
    return this.list();
  } else if (this.alNum > 1) {
    return this.list();
  }
  return this.al;
}

Allergies.prototype.allergicTo = function(allergy) {
  return this.list().indexOf(allergy) > -1;
}

module.exports = Allergies;
