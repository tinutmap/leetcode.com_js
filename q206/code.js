// Question link: https://leetcode.com/problems/reverse-linked-list/?envType=study-plan&id=level-1

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
var reverseList = function (head) {
  // // Solution 1: Iterative. OK, relied too much on past memory that led astray. Should be more careful and clear the mind!
  // // Solution link https://leetcode.com/problems/reverse-linked-list/submissions/899985802/?envType=study-plan&id=level-1
  // let prevNode = null;
  // while (head) {
  //   let headNextNode = head.next;
  //   head.next = prevNode;
  //   prevNode = head;
  //   head = headNextNode;
  // }
  // return prevNode;

  // // Solution 2: Recursive.
  // // Solution link https://leetcode.com/problems/reverse-linked-list/submissions/900007810/
  // let newHead = null;
  // var recurse = (head) => {
  //   if (!head.next) {
  //     // let nextNode = head.next
  //     // head.next = reverseList
  //     newHead = head;
  //   } else {
  //     let nextNode = head.next;
  //     let rf = recurse(nextNode);
  //     rf.next = head;
  //     head.next = null;
  //   }
  //   return head;
  // };
  // if (head) recurse(head);
  // return newHead;

  // Solution 3: Recursive with compacting variables based on solution 2.
  // Solution link https://leetcode.com/problems/reverse-linked-list/submissions/900007810/
  let newHead = null;
  var recurse = (head) => {
    if (!head.next) {
      newHead = head;
    } else {
      recurse(head.next).next = head;
      head.next = null;
    }
    return head;
  };
  if (head) recurse(head);
  return newHead;

  // // Forum Solution:
  // // Solution link https://leetcode.com/problems/reverse-linked-list/solutions/2458632/easy-0-ms-100-fully-explained-java-c-python-js-c-python3-recursive-iterative/
  // // Special case...
  // if (head == null || head.next == null) return head;
  // // Create a new node to call the function recursively and we get the reverse linked list...
  // var res = reverseList(head.next);
  // // Set head node as head.next.next...
  // head.next.next = head;
  // //set head's next to be null...
  // head.next = null;
  // return res; // Return the reverse linked list...
};

// Below is for internal testing
module.exports = {
  f: reverseList,
};
