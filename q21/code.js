// Question link: https://leetcode.com/problems/merge-two-sorted-lists/?envType=study-plan&id=level-1

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {

    // Solution 1: average performance. It's been a while touching linked-list, what an evenmore headache with JS
    // Solution link https://leetcode.com/problems/merge-two-sorted-lists/submissions/899518286/?envType=study-plan&id=level-1

    if (!list1) return list2
    if (!list2) return list1
    if (list1.val > list2.val) [list1, list2] = [list2, list1]

    let list1Head = list1
    let list2Next, list1NextVal

    while (list1 && list2) {
        list1NextVal = list1.next ? list1.next.val : Number.MAX_SAFE_INTEGER
        if ((list1.val <= list2.val) && (list2.val < list1NextVal)) {
            list2Next = list2.next
            list2.next = list1.next
            list1.next = list2
            list2 = list2Next
            list1 = list1.next
        } else {
            list1 = list1.next
        }
    }
    if (list2) list1.next = list2

    return list1Head


    // Forum Solution: create a dummy linked list and start merging from l1 and l2.
    // Solution link https://leetcode.com/problems/merge-two-sorted-lists/solutions/9963/simple-javascript-solution/
}

//
module.exports = {
    f: mergeTwoLists
} 