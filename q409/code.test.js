// // import f from code
const { f } = require("./code");

test("test 1", () => {
  const s = "abccccdd";
  const re = 7;
  expect(f(s)).toStrictEqual(re);
});
test("test 2", () => {
  const s = "a";
  const re = 1;
  expect(f(s)).toStrictEqual(re);
});
