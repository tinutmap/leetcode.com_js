// Question link: https://leetcode.com/problems/odd-even-linked-list/description/?envType=study-plan&id=level-2

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
var oddEvenList = function (head) {
  // Solution 1:
  // Solution link

  if (!head || !head.next) return head;
  const evenHeadNode = head.next;
  let oddCur = head,
    evenCur = head.next;

  while (true) {
    if (!evenCur.next) break;
    oddCur.next = evenCur.next;
    oddCur = oddCur.next;
    evenCur.next = oddCur.next;
    if (!oddCur.next) break;
    evenCur = evenCur.next;
  }
  oddCur.next = evenHeadNode;
  return head;

  // Forum Solution: similar solution. not greater performance than that of solution 1.
  // Solution link https://leetcode.com/problems/odd-even-linked-list/solutions/78204/javascript-solution/
};

// Below is for internal testing
module.exports = {
  f: oddEvenList,
};
