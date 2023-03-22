// import f from code
const { f } = require("./code");

test("test 1", () => {
  const s = "ABAB";
  const k = 2;
  const re = 4;
  expect(f(s, k)).toStrictEqual(re);
});

test("test 2", () => {
  const s = "AABABBA";
  const k = 1;
  const re = 4;
  expect(f(s, k)).toStrictEqual(re);
});

test("test 3", () => {
  const s = "AAAA";
  const k = 2;
  const re = 4;
  expect(f(s, k)).toStrictEqual(re);
});
/* 
"ABAB"
2
"AABABBA"
1
"AAAA"
2
 */
