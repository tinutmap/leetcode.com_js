// import f from code
const { f } = require("./code");
const {
  createSinglyLinkedList,
  linkListToArray,
} = require("../linkedList/base");

test("test 1", () => {
  // This test is not working
  const head = [3, 2, 0, -4];
  const headList = createSinglyLinkedList(head),
    fToArray = linkListToArray(f(headList)),
    re = [];

  expect(fToArray).toStrictEqual(re);
});
