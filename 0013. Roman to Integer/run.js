/**
 * @param {string} s
 * @return {number}
 * @see https://leetcode.com/problems/roman-to-integer/
 */
var romanToInt = function (s) {
  symbols = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  dig = s.length - 1
  result = 0
  while (dig >= 0) {
    currentDigSymbol = s[dig]
    result += symbols[currentDigSymbol]
    dig--

    if (dig >= 0) {
      previousDigSymble = s[dig]
      if ((previousDigSymble == 'I' && ['V', 'X'].indexOf(currentDigSymbol) != -1)
        || (previousDigSymble == 'X' && ['L', 'C'].indexOf(currentDigSymbol) != -1)
        || (previousDigSymble == 'C' && ['D', 'M'].indexOf(currentDigSymbol) != -1)
      ) {
        result -= symbols[previousDigSymble]
        dig--
      }
    }
  }

  return result
}

//-----

let inputs = [
  "III",
  "LVIII",
  "MCMXCIV",
]

for (const i in inputs) {
  console.log(romanToInt(inputs[i]))
}