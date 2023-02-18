const ListNode = class {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
};

// const SinglyLinkedList = class {
//     constructor(array = []) {
//         if (array.length) {
//             var cur = new ListNode(array[0])
//             this.head = cur
//             for (let i = 1; i < array.length; i++) {
//                 let node = new ListNode(array[i])
//                 cur.next = node
//                 cur = node
//             }
//         }
//     }
// }

const createSinglyLinkedList = (array = []) => {
  if (array.length > 0) {
    let cur = new ListNode(array[0]),
      head = cur;
    for (let i = 1; i < array.length; i++) {
      let node = new ListNode(array[i]);
      cur.next = node;
      cur = node;
    }
    return head;
  }
  // return new ListNode(null)
  return null;
};
const linkListToArray = (listHead) => {
  const a = [];
  let cur = listHead;
  while (cur && typeof cur.val === "number") {
    a.push(cur.val);
    cur = cur.next;
  }
  return a;
};
module.exports = {
  ListNode,
  // SinglyLinkedList,
  createSinglyLinkedList,
  linkListToArray,
};
