// Question link: https://leetcode.com/problems/linked-list-cycle-ii/description/?envType=study-plan&id=level-1

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  // Solution 1: using Set. not optimal with O(1) memory.
  // Solution link
  while (head) {
    if (!d.has(head)) {
      d.add(head);
      head = head.next;
    } else return head;
  }
  return null;

  //   while (head) {
  //     if (head.next !== head) {
  //       let cur = head;
  //       head = head.next;
  //       cur.next = cur;
  //     } else {
  //       return head;
  //     }
  //   }
  //   return null;

  //   let fast = (slow = head);
  //   while (fast.next) {
  //     fast = fast.next.next;
  //     if (fast === slow) return fast.next;
  //     slow = slow.next;
  //   }
  //   return null;
  // Forum Solution: see turtle and hare pointers explanation.
  // Solution link https://leetcode.com/problems/linked-list-cycle-ii/solutions/1701128/c-java-python-slow-and-fast-image-explanation-beginner-friendly/?envType=study-plan&id=level-1&orderBy=most_votes
};

// Below is for internal testing
module.exports = {
  f: detectCycle,
};
