function bufferEmptyException(message) {
  this.message = message;
  this.name = "BufferEmptyException";
}
function bufferFullException(message) {
  this.message = message;
  this.name = "BufferFullException";
}

function circularBuffer(num) {
  return new Buffer(num)
}

function Buffer(num) {
  this.buffer = num;
  this.arr = [];
}

Buffer.prototype.read = function() {
  if (this.arr.length === 0) {
    throw new bufferEmptyException('Buffer is Empty')
  } else {
    return this.arr.shift()
  }
}

Buffer.prototype.write = function(str) {
  if (str && this.arr.length < this.buffer) {
    this.arr.push(str)
  } else if (str) {
    throw new bufferFullException('Buffer is Full')
  }
}

Buffer.prototype.forceWrite = function(str) {
  if (this.arr.length === this.buffer) {
    this.arr.shift()
    this.arr.push(str)
  } else {
    this.arr.push(str)
  }
}

Buffer.prototype.clear = function() {
  this.arr = [];
}

module.exports.circularBuffer = circularBuffer;
module.exports.bufferEmptyException = bufferEmptyException;
module.exports.bufferFullException = bufferFullException;
