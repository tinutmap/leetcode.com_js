// import f from code
const { f } = require("./code");

test("test 1", () => {
  const strs = ["flower", "flow", "flight"];
  const re = "fl";
  expect(f(strs)).toStrictEqual(re);
});

test("test 2", () => {
  const strs = ["dog", "racecar", "car"];
  const re = "";
  expect(f(strs)).toStrictEqual(re);
});
test("test 3", () => {
  const strs = [""];
  const re = "";
  expect(f(strs)).toStrictEqual(re);
});
test("test 4", () => {
  const strs = ["a"];
  const re = "a";
  expect(f(strs)).toStrictEqual(re);
});
/* 
["flower","flow","flight"]
["dog","racecar","car"]
[""]
["a"]
 */
