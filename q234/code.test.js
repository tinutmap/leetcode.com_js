// import f from code
const { createSinglyLinkedList } = require("../linkedList/base");
const { f } = require("./code");

test("test 1", () => {
  const head = [1, 2, 2, 1],
    headList = createSinglyLinkedList(head);

  const re = true;
  expect(f(headList)).toStrictEqual(re);
});
test("test 2", () => {
  const head = [1, 2],
    headList = createSinglyLinkedList(head);

  const re = false;
  expect(f(headList)).toStrictEqual(re);
});
test("test 3", () => {
  const head = [1, 2, 2, 2, 1],
    headList = createSinglyLinkedList(head);

  const re = true;
  expect(f(headList)).toStrictEqual(re);
});
test("test 4", () => {
  const head = [1, 1],
    headList = createSinglyLinkedList(head);

  const re = true;
  expect(f(headList)).toStrictEqual(re);
});
test("test 5", () => {
  const head = [1],
    headList = createSinglyLinkedList(head);

  const re = true;
  expect(f(headList)).toStrictEqual(re);
});
test("test 6", () => {
  const head = [1, 0, 1],
    headList = createSinglyLinkedList(head);

  const re = true;
  expect(f(headList)).toStrictEqual(re);
});
/* 
[1,2,2,1]
[1,2]
[1, 2, 2, 2, 1]
[1, 1]
[1]
 */
