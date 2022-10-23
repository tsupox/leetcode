/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 *
 * @see https://leetcode.com/problems/merge-two-sorted-lists/
 *
 * 1 - めっちゃゴリゴリ書いたの
 * Runtime: 157 ms, faster than 5.13% of JavaScript online submissions for Merge Two Sorted Lists.
 * Memory Usage: 46.4 MB, less than 5.86% of JavaScript online submissions for Merge Two Sorted Lists.
 */
var mergeTwoLists = function (list1, list2) {
  let sorted = []
  while (list1 != null || list2 != null) {
    if (list2 == null) {
      sorted.push(list1.val)
      list1 = list1.next ? list1.next : null
    } else if (list1 == null) {
      sorted.push(list2.val)
      list2 = list2.next ? list2.next : null
    } else if (list1.val <= list2.val) {
      sorted.push(list1.val)
      list1 = list1.next ? list1.next : null
    } else {
      sorted.push(list2.val)
      list2 = list2.next ? list2.next : null
    }
  }

  console.log(sorted)
  let result = null
  for (const dig in sorted.reverse()) {
    result = new ListNode(sorted[dig], result)
  }
  return result
};

//-----

let inputs = [
  [[1, 2, 4], [1, 3, 4]],
  [[], []],
  [[], [0]],
]

for (const i in inputs) {
  console.log(...inputs[i])

  let l1 = undefined
  for (const dig in inputs[i][0].reverse()) {
    l1 = new ListNode(inputs[i][0][dig], l1)
  }

  let l2 = undefined
  for (const dig in inputs[i][1].reverse()) {
    l2 = new ListNode(inputs[i][0][dig], l2)
  }
  console.log(mergeTwoLists(l1, l2))
}


function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

