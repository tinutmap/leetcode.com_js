// import f from code
const { f } = require("./code");
const {
  createSinglyLinkedList,
  linkListToArray,
} = require("../linkedList/base");

test("test 1", () => {
  const head = [1, 2, 3, 4, 5],
    re = [5, 4, 3, 2, 1];
  const headList = createSinglyLinkedList(head),
    fToArray = linkListToArray(f(headList));

  expect(fToArray).toStrictEqual(re);
});

test("test 2", () => {
  const head = [1, 2],
    re = [2, 1];
  const headList = createSinglyLinkedList(head),
    fToArray = linkListToArray(f(headList));

  expect(fToArray).toStrictEqual(re);
});

test("test 3", () => {
  const head = [],
    re = [];
  const headList = createSinglyLinkedList(head),
    fToArray = linkListToArray(f(headList));

  expect(fToArray).toStrictEqual(re);
});

test("test 4", () => {
  const head = [1, 2, 3],
    re = [3, 2, 1];
  const headList = createSinglyLinkedList(head),
    fToArray = linkListToArray(f(headList));

  expect(fToArray).toStrictEqual(re);
});
