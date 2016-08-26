const usedNames = {};

function Robot() {
  this.name = getRandomName();
}

Robot.prototype.reset = function() {
  this.name = getRandomName();
}

function getRandomName() {
  var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  var nums  = '1234567890'.split('');
  var name  = `${randomElement(alpha)}${randomElement(alpha)}${randomElement(nums)}${randomElement(nums)}${randomElement(nums)}`
  if (!usedNames[name]) {
    usedNames[name] = true;
    return name;
  } else {
    return getRandomName();
  }
}

function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}


module.exports = Robot;
