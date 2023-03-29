// import f from code
const { f } = require("./code");

test("test 1", () => {
  const n = 2,
    k = 1;
  const re = 0;
  expect(f(n, k)).toStrictEqual(re);
});

test("test 2", () => {
  const n = 1,
    k = 1;
  const re = 0;
  expect(f(n, k)).toStrictEqual(re);
});
test("test 3", () => {
  const n = 2,
    k = 2;
  const re = 1;
  expect(f(n, k)).toStrictEqual(re);
});
test("test 4", () => {
  const n = 3,
    k = 4;
  const re = 0;
  expect(f(n, k)).toStrictEqual(re);
});
test("test 5", () => {
  const n = 3,
    k = 3;
  const re = 1;
  expect(f(n, k)).toStrictEqual(re);
});
test("test 6", () => {
  const n = 4,
    k = 2;
  const re = 1;
  expect(f(n, k)).toStrictEqual(re);
});
test("test 7", () => {
  const n = 5,
    k = 2;
  const re = 1;
  expect(f(n, k)).toStrictEqual(re);
});
test("test 8", () => {
  const n = 30,
    k = 434991989;
  const re = 0;
  expect(f(n, k)).toStrictEqual(re);
});
test("test 9", () => {
  const n = 4,
    k = 5;
  const re = 1;
  expect(f(n, k)).toStrictEqual(re);
});
test("test 10", () => {
  const n = 4,
    k = 8;
  const re = 1;
  expect(f(n, k)).toStrictEqual(re);
});
test("test 11", () => {
  const n = 4,
    k = 7;
  const re = 0;
  expect(f(n, k)).toStrictEqual(re);
});
/*
1
1
2
1
2
2
3
4
3
3 
4
2
5
2
*/
