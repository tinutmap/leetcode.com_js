// Question link: https://leetcode.com/problems/palindrome-linked-list/description/?envType=study-plan&id=level-2
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // // Solution 1: shameful performance on a sick rainy day.
  // // Solution link https://leetcode.com/problems/palindrome-linked-list/submissions/928590699/?envType=study-plan&id=level-2
  // let arr = [];
  // while (head) {
  //   arr.push(head.val);
  //   head = head.next;
  // }
  // while (arr.length > 1) {
  //   if (arr[0] !== arr.at(-1)) {
  //     return false;
  //   }
  //   arr.pop();
  //   arr.shift();
  // }

  // return true;

  // Solution 2: better but not great
  // Solution link https://leetcode.com/problems/palindrome-linked-list/submissions/928745017/?envType=study-plan&id=level-2

  if (!head.next) {
    return true;
  }
  let fast = head,
    slow = head;
  listLength = 1;
  const arr = [head.val];

  while (fast.next) {
    fast = fast.next;
    listLength += 1;
    if (listLength % 2 === 1) {
      slow = slow.next;
      arr.push(slow.val);
    }
  }
  if (listLength % 2 === 1) {
    arr.pop();
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    slow = slow.next;
    if (!slow || slow.val !== arr[i]) return false;
  }
  return true;

  // Forum Solution: using the same 2 pointer method but reversing the first half linked list. this can't be an easy question!
  // Solution link https://leetcode.com/problems/palindrome-linked-list/solutions/1137027/js-python-java-c-easy-floyd-s-reversal-solution-w-explanation/
};

// Below is for internal testing
module.exports = {
  f: isPalindrome,
};
