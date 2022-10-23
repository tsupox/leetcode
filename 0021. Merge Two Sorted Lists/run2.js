/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 *
 * @see https://leetcode.com/problems/merge-two-sorted-lists/
 *
 * 2 - Discuss を見て再帰にしたの
 * Runtime: 124 ms, faster than 25.67% of JavaScript online submissions for Merge Two Sorted Lists.
 * Memory Usage: 44 MB, less than 77.57% of JavaScript online submissions for Merge Two Sorted Lists.
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2
  if (!list2) return list1
  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
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

