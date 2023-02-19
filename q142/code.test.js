// import f from code
const { f } = require("./code");
const {
  createSinglyLinkedList,
  linkListToArray,
} = require("../linkedList/base");

test("test 1", () => {
  const head = [3, 2, 0, -4];
  re = 1;
  const headList = createSinglyLinkedList(head),
    fToArray = linkListToArray(f(headList));

  expect(fToArray).toStrictEqual(re);
});
