// import f from code
const { f } = require("./code");

test("test 1", () => {
  const prices = [7, 1, 5, 3, 6, 4];
  const re = 5;
  expect(f(prices)).toStrictEqual(re);
});
test("test 2", () => {
  const prices = [7, 6, 4, 3, 1];
  const re = 0;
  expect(f(prices)).toStrictEqual(re);
});
