// import f from code
const { f } = require("./code");

test("test 1", () => {
  const words = ["i", "love", "leetcode", "i", "love", "coding"],
    k = 2;
  const re = ["i", "love"];
  expect(f(words, k)).toStrictEqual(re);
});

test("test 2", () => {
  const words = ["i", "abc", "leetcode", "i", "abc", "coding"],
    k = 2;
  const re = ["abc", "i"];
  expect(f(words, k)).toStrictEqual(re);
});

test("test 3", () => {
  const words = ["abc", "i", "leetcode", "i", "abc", "coding"],
    k = 2;
  const re = ["abc", "i"];
  expect(f(words, k)).toStrictEqual(re);
});
test("test 4", () => {
  const words = [
      "the",
      "day",
      "is",
      "sunny",
      "the",
      "the",
      "the",
      "sunny",
      "is",
      "is",
    ],
    k = 4;
  const re = ["the", "is", "sunny", "day"];
  expect(f(words, k)).toStrictEqual(re);
});
