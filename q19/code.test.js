// import f from code
const { f } = require("./code");
const {
  createSinglyLinkedList,
  linkListToArray,
} = require("../linkedList/base");

test("test 1", () => {
  const head = [1, 2, 3, 4, 5],
    n = 2,
    headList = createSinglyLinkedList(head),
    fToArray = linkListToArray(f(headList, n));

  const re = [1, 2, 3, 5];
  expect(fToArray).toStrictEqual(re);
});

test("test 2", () => {
  const head = [1],
    n = 1,
    headList = createSinglyLinkedList(head),
    fToArray = linkListToArray(f(headList, n));

  const re = [];
  expect(fToArray).toStrictEqual(re);
});

test("test 3", () => {
  const head = [1, 2],
    n = 1,
    headList = createSinglyLinkedList(head),
    fToArray = linkListToArray(f(headList, n));

  const re = [1];
  expect(fToArray).toStrictEqual(re);
});
test("test 4", () => {
  const head = [1, 2],
    n = 2,
    headList = createSinglyLinkedList(head),
    fToArray = linkListToArray(f(headList, n));

  const re = [2];
  expect(fToArray).toStrictEqual(re);
});
/* 
[1,2,3,4,5]
2
[1]
1
[1, 2]
1
[1, 2]
2
 */
