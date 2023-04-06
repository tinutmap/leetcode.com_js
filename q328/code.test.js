// import f from code
const {
  createSinglyLinkedList,
  linkListToArray,
} = require("../linkedList/base");
const { f } = require("./code");

test("test 1", () => {
  const head = [1, 2, 3, 4, 5],
    headList = createSinglyLinkedList(head),
    fList = linkListToArray(f(headList));
  const re = [1, 3, 5, 2, 4];
  expect(fList).toStrictEqual(re);
});
test("test 2", () => {
  const head = [1, 2, 3, 4, 5, 6],
    headList = createSinglyLinkedList(head),
    fList = linkListToArray(f(headList));
  const re = [1, 3, 5, 2, 4, 6];
  expect(fList).toStrictEqual(re);
});

test("test 3", () => {
  const head = [1, 2],
    headList = createSinglyLinkedList(head),
    fList = linkListToArray(f(headList));
  const re = [1, 2];
  expect(fList).toStrictEqual(re);
});

test("test 4", () => {
  const head = [1],
    headList = createSinglyLinkedList(head),
    fList = linkListToArray(f(headList));
  const re = [1];
  expect(fList).toStrictEqual(re);
});

test("test 5", () => {
  const head = [2, 1, 3, 5, 6, 4, 7],
    headList = createSinglyLinkedList(head),
    fList = linkListToArray(f(headList));
  const re = [2, 3, 6, 7, 1, 5, 4];
  expect(fList).toStrictEqual(re);
});
/* 
[1,2,3,4,5]
[2,1,3,5,6,4,7]
[1, 2, 3, 4, 5, 6]
[1, 2]
[1]
 */
