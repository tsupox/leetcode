/**
 * @param {string} s
 * @return {number}
 * @see https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
var lengthOfLongestSubstring = function (s) {
  // if (s.length == 0) return 0

  let longest = ""
  let current = ""

  for (let i = 0; i < s.length; i++) {
    let regResult = (new RegExp(s[i])).exec(s.slice(i + 1))
    current = s.slice(i, (regResult ? (i + regResult.index + 1) : s.length))
    let isAllOnce = true
    for (let j = 0; j < current.length; j++) {
      if ((new RegExp(current[j])).exec(current.slice(j + 1))) {
        isAllOnce = false
        break;
      }
    }
    if (isAllOnce) {
      longest = longest.length < current.length ? current : longest

    }

  }
  return longest.length
};

//-----

let inputs = [
  // "abcabcbb", //3
  // "bbbbb",  //1
  // "pwwkew", //3
  // "au", //2
  // "dvdf", //3
  // " ", //1
  "cdd", //2
]

for (const i in inputs) {
  console.log(inputs[i])
  console.log(lengthOfLongestSubstring(inputs[i]))
}