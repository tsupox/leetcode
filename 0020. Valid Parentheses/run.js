/**
 * @param {string} s
 * @return {boolean}
 *
 * @see https://leetcode.com/problems/valid-parentheses/
 *
 * Runtime: 108 ms, faster than 43.70% of JavaScript online submissions for Valid Parentheses.
 * Memory Usage: 42.5 MB, less than 54.98% of JavaScript online submissions for Valid Parentheses.
 */
var isValid = function (s) {
  let parentheses = []
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
      case "{":
      case "[":
        parentheses.push(s[i]);
        break;
      case ")":
        if (parentheses.pop() != "(") return false
        break;
      case "}":
        if (parentheses.pop() != "{") return false
        break;
      case "]":
        if (parentheses.pop() != "[") return false
        break;
    }
  }
  if (parentheses.length != 0) return false
  return true
}


//-----

let inputs = [
  "()",
  "()[]{}",
  "(]",
  "(",
  ")",
  "({[][](){}}())"
]

for (const i in inputs) {
  console.log(inputs[i])
  console.log(isValid(inputs[i]))
}