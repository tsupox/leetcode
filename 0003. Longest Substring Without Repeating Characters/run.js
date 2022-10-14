/**
 * @param {string} s
 * @return {number}
 * @see https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length == 0) return 0

  let longest = s[0]
  let current = s[0]

  for (let i = 1; i < s.length; i++) {
    // 現在の文字列に入ってなければ
    if (!(new RegExp(s[i])).test(current)) {
      current += s[i]

      // 最後の時は else に入らないので
      if (i == s.length - 1) {
        longest = longest.length < current.length ? current : longest
      }
    } else {
      longest = longest.length < current.length ? current : longest
      current = s[i]
    }
  }

  return longest.length
};
//-----

let inputs = [
  "abcabcbb", //3
  "bbbbb",  //1
  "pwwkew", //3
  "au", //2
  "dvdf", //3
]

for (const i in inputs) {
  console.log(inputs[i])
  console.log(lengthOfLongestSubstring(inputs[i]))
}