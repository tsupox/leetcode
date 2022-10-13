/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * @see https://leetcode.com/problems/add-two-numbers/
 */
var addTwoNumbers = function (l1, l2) {

  //console.log(JSON.parse(JSON.stringify(l1)))
  //{ val: 2, next: { val: 4, next: { val: 3, next: null } } }
  // なんだこれ

  var result = (((l1.reverse().join('') * 1) + (l2.reverse().join('') * 1)) + "").split('').reverse()
  return result.map((el) => {
    return el * 1
  })
};

//-----

let inputs = [
  [[2, 4, 3], [5, 6, 4]],
  [[0], [0]],
  [[9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]],
]

for (const i in inputs) {
  console.log(...inputs[i])
  console.log(addTwoNumbers(...inputs[i]))
}