// Question link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/?envType=study-plan&id=level-2
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // Solution 1: solved successfully due to past experience in python.
  // Solution link https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/928573942/?envType=study-plan&id=level-2

  let fast = head,
    slow = head;

  for (i = 1; i <= n; i++) {
    fast = fast.next;
  }
  if (!fast) return slow.next;

  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;

  // Forum Solution: Same as solution 1
  // Solution link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/1164542/js-python-java-c-easy-two-pointer-solution-w-explanation/
};

// Below is for internal testing
module.exports = {
  f: removeNthFromEnd,
};
