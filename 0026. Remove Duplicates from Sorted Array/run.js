/**
 * @param {number[]} nums
 * @return {number}
 *
 * Runtime: 114 ms, faster than 72.68% of JavaScript online submissions for Remove Duplicates from Sorted Array.
 * Memory Usage: 45.3 MB, less than 11.04% of JavaScript online submissions for Remove Duplicates from Sorted Array.
 */
var removeDuplicates = function (nums) {
  nums = nums.sort()
  var previous = ''
  var counter = 0
  nums.forEach((v, i) => {
    if (v !== previous) {
      previous = v
      counter++
    } else {
      nums[i] = 99999
    }
  })
  nums = nums.sort((s1, s2) => s1 * 1 - s2 * 1) //asc

  return counter
};

//-----

let judge = (nums, expectedNums) => {
  let k = removeDuplicates(nums); // Calls your implementation

  console.log(k == expectedNums.length)
  for (var i = 0; i < k; i++) {
    console.log(nums[i] == expectedNums[i])
  }
}

let inputs = [
  // [[1, 1, 2], [1, 2]],
  // [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4], [0, 1, 2, 3, 4]],
  [[-3, -1, 0, 0, 0, 3, 3], [-3, -1, 0, 3]],
]

for (let i in inputs) {
  var temp = JSON.parse(JSON.stringify(inputs[i]))
  console.log(...inputs[i])
  console.log(removeDuplicates(inputs[i][0]))
  judge(...temp)
}
