function at(hour, min) {
  return new Clock(hour, min);
}

function Clock(hour, min) {
  this.hour = hour || 0;
  this.min  = min || 0;
}

Clock.prototype.toString = function() {
  var time = getTime(this.hour, this.min)
  return `${time[0]}:${time[1]}`
}

Clock.prototype.plus = function(num) {
  this.min += num;
  return this
}

Clock.prototype.minus = function(num) {
  this.min -= num;
  return this
}

Clock.prototype.equals = function(clock) {
  return clock.toString() === this.toString();
}

function getTime(h, m) {
  var hour = getHour(h + Math.floor(m/60));
  var minute = getMinute(m);
  return [formatTime(hour), formatTime(minute)]
}

function formatTime(time) {
  if (time < 10) {
    return `0${time}`
  } else {
    return `${time}`
  }
}

function getHour(hour) {
  if (hour < 0) {
    if ((24 - (Math.abs(hour) % 24)) === 24) {
      return 0
    } else {
      return 24 - (Math.abs(hour) % 24)
    }
  } else {
    return hour % 24;
  }
}

function getMinute(min) {
  if (min < 0) {
    return 60 - (Math.abs(min) % 60)
  }
  return min % 60;
}


module.exports.at = at;
