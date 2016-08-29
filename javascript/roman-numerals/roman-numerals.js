const romanNums = {
  0: '', 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V',
  6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X',
  20: 'XX', 30: 'XXX', 40: 'XL', 50: 'L', 60: 'LX',
  70: 'LXX', 80: 'LXXX', 90: 'XC', 100: 'C', 200: 'CC',
  300: 'CCC', 400: 'CD', 500: 'D', 600: 'DC', 700: 'DCC',
  800: 'DCCC', 900: 'CM', 1000: 'M'
}

function toRoman(num) {
  var numStr = num.toString();
  var tens, hundreds, thousands
  if (numStr.length === 1) {
    return romanNums[num]
  } else if (numStr.length === 2) {
    tens = findTens(num);
    return romanNums[tens] + romanNums[numStr.charAt(1)]
  } else if (numStr.length === 3) {
    hundreds = findHundreds(num);
    if ((num % 100) < 10) {
      tens = 0
    } else {
      tens = findTens((num % 100));
    }
    return romanNums[hundreds] + romanNums[tens] + romanNums[numStr.charAt(2)];
  } else if (numStr.length === 4) {
    thousands = 'M'.repeat(Math.floor(num / 1000))
    if ((num % 1000) < 100) {
      hundreds = 0
    } else {
      hundreds = findHundreds((num % 1000));
    }
    if ((num % 100) < 10) {
      tens = 0
    } else {
      tens = findTens((num % 100));
    }
    return thousands + romanNums[hundreds] + romanNums[tens] + romanNums[numStr.charAt(3)]
  }
}

function findTens(num) {
  return Math.floor(num / 10).toString() + '0';
}

function findHundreds(num) {
  return Math.floor(num / 100).toString() + '00';
}

function findThousands(num) {
  return Math.floor(num / 1000).toString() + '000';
}

module.exports = toRoman;
