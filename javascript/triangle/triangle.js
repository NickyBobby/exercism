function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.kind = function() {
  triangleExceptions(this.side1, this.side2, this.side3)
  if (this.side1 === this.side2 &&
      this.side2 === this.side3 &&
      this.side1 === this.side3) {
    return 'equilateral';
  } else if (this.side1 === this.side2 ||
             this.side2 === this.side3 ||
             this.side1 === this.side3) {
    return 'isosceles';
  } else if (this.side1 !== this.side2 &&
             this.side2 !== this.side3 &&
             this.side1 !== this.side3) {
    return 'scalene';
  }
}

function triangleExceptions(s1, s2, s3) {
  var sides = [s1, s2, s3].sort(compareNumbers)
  if ( sides[0] + sides[1] < sides[2]) {
    throw new Exception('Breaks Triangle Rules of Inequality');
  }
  if (s1 <= 0 ||
      s2 <= 0 ||
      s3 <= 0 ) {
    throw new Exception("Can't be Zero or Less Than Zero")
  }
}

function compareNumbers(a, b) {
  return a - b;
}

module.exports = Triangle;
