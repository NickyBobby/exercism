const earth   = 31557600;
const mercury = 7600543.81992;
const venus   = 19414149.052176;
const mars    = 59354032.69008;
const jupiter = 374355659.124;
const saturn  = 929292362.8848;
const uranus  = 2651370019.3296;
const neptune = 5200418560.032;

function SpaceAge(age) {
  this.seconds = age;
}

SpaceAge.prototype.onEarth = function() {
  return formatAge(this.seconds / earth)
}

SpaceAge.prototype.onMercury = function() {
  return formatAge(this.seconds / mercury)
}

SpaceAge.prototype.onVenus = function() {
  return formatAge(this.seconds / venus)
}

SpaceAge.prototype.onMars = function() {
  return formatAge(this.seconds / mars)
}

SpaceAge.prototype.onJupiter = function() {
  return formatAge(this.seconds / jupiter)
}

SpaceAge.prototype.onSaturn = function() {
  return formatAge(this.seconds / saturn)
}

SpaceAge.prototype.onUranus = function() {
  return formatAge(this.seconds / uranus)
}

SpaceAge.prototype.onNeptune = function() {
  return formatAge(this.seconds / neptune)
}

function formatAge(num) {
  return Math.round(num * 100) / 100
}

module.exports = SpaceAge;
