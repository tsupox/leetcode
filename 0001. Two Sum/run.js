/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @see https://leetcode.com/problems/two-sum/
 *
 * <1>
 * Runtime: 151 ms, faster than 41.65% of JavaScript online submissions for Two Sum.
 * Memory Usage: 42.8 MB, less than 42.68% of JavaScript online submissions for Two Sum.
 *
 * <2>
 * Runtime: 232 ms, faster than 16.87% of JavaScript online submissions for Two Sum.
 * Memory Usage: 42.1 MB, less than 91.04% of JavaScript online submissions for Two Sum.
 */
var twoSum = function (nums, target) {

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target == (nums[i] + nums[j])) {
        return [i, j]
      }
    }
  }
};

//-----

let inputs = [
  [[2, 7, 11, 15], 9],
  [[3, 2, 4], 6],
  [[3, 3], 6],
  [[-1, -2, -3, -4, -5], -8],
  [[0, 4, 3, 0], 0],
  [[-18, 12, 3, 0], -6],
]

for (const i in inputs) {
  console.log(...inputs[i])
  console.log(twoSum(...inputs[i]))
}