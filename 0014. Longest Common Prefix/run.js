/**
 * @param {string[]} strs
 * @return {string}
 * @see https://leetcode.com/problems/longest-common-prefix/
 *
 * Runtime: 109 ms, faster than 38.28% of JavaScript online submissions for Longest Common Prefix.
 * Memory Usage: 44.5 MB, less than 13.03% of JavaScript online submissions for Longest Common Prefix.
 */
var longestCommonPrefix = function (strs) {

  //asc
  strs = strs.sort((s1, s2) => s1 - s2)

  // 1 件も無ければ終わり
  if (strs.length == 0) return ''

  let result = ''
  for (let dig = 1; dig <= strs[0].length; dig++) {
    let targetStr = strs[0].substring(0, dig)
    for (let i = 1; i < strs.length; i++) {
      let checkStr = strs[i].substring(0, dig)
      if (checkStr != targetStr) return result
    }
    result = targetStr
  }
  return result;
};

//-----

let inputs = [
  ["flower", "flow", "flight"],
  ["dog", "racecar", "car"],
  [],
  ["a"],
  ["flower", "flow", "flight", "dog", "dogier", "book", "bookie"]
]

for (const i in inputs) {
  console.log(inputs[i])
  console.log(longestCommonPrefix(inputs[i]))
}