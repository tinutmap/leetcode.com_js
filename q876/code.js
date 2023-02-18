// Question link: https://leetcode.com/problems/middle-of-the-linked-list/?envType=study-plan&id=level-1

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  // Solution 1: correct solution
  // Solution link https://leetcode.com/problems/middle-of-the-linked-list/submissions/900476005/?envType=study-plan&id=level-1
  if (!head.next) {
    return head;
  }

  let mid = head;
  while (head && head.next) {
    head = head.next;
    mid = mid.next;
    head = head.next;
  }
  return mid;

  // Forum Solution: similar to solution 1
  // Solution link https://leetcode.com/problems/middle-of-the-linked-list/solutions/426521/javascript-two-pointers-fast-slow/?orderBy=most_votes
};

// Below is for internal testing
module.exports = {
  f: middleNode,
};
