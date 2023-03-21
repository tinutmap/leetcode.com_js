// import f from code
const { f } = require("./code");

test("test 1", () => {
  const m = 3,
    n = 7;
  const re = 28;
  expect(f(m, n)).toStrictEqual(re);
});

test("test 2", () => {
  const m = 3,
    n = 2;
  const re = 3;
  expect(f(m, n)).toStrictEqual(re);
});
test("test 3", () => {
  const m = 1,
    n = 1;
  const re = 1;
  expect(f(m, n)).toStrictEqual(re);
});
/* 
3
7
3
2
1
1
 */
