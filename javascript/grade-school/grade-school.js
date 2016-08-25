function School() {
  this.list = {};
}

School.prototype.roster = function() {
  return this.list;
}

School.prototype.add = function(name, grade) {
  if (this.list[grade]) {
    this.list[grade].push(name);
    this.list[grade].sort();
  } else {
    this.list[grade] = [name];
  }
}

School.prototype.grade = function(grade) {
  if (this.list[grade]) {
    return this.list[grade];
  } else {
    return [];
  }
}

module.exports = School;
