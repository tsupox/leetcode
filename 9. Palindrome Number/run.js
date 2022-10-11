/**
 * @param {number} x
 * @return {boolean}
 * https://leetcode.com/problems/palindrome-number/
 *
 * Runtime: 340 ms, faster than 26.84% of JavaScript online submissions for Palindrome Number.
 * Memory Usage: 50.7 MB, less than 74.64% of JavaScript online submissions for Palindrome Number.
 */
var isPalindrome = function (x) {
  xx = x.toString()
  // console.log(xx)
  if (xx[0] == '-') {
    return false
  }

  for (let i = 0; i < Math.ceil(xx.length / 2); i++) {
    if (xx[i] != xx[xx.length - i - 1]) {
      // console.log({ 'digit': i })
      return false
    }
  }
  return true
};

//-----

let inputs = [
  1,
  -1,
  121,
  123,
  1234567890987654321n,
  1234567890123456789009876543210987654321n,
  1234567890123456789009876543210987654321n,
]

for (const i in inputs) {
  console.log(inputs[i])
  console.log(isPalindrome(inputs[i]))
}