// import f from code
const { f } = require("./code");

test("test 1", () => {
  const input = 3;
  const re = 3;
  expect(f(input)).toStrictEqual(re);
});

test("test 2", () => {
  const input = 4;
  const re = 5;
  expect(f(input)).toStrictEqual(re);
});

test("test 3", () => {
  const input = 5;
  const re = 8;
  expect(f(input)).toStrictEqual(re);
});
test("test 4", () => {
  const input = 13;
  const re = 377;
  expect(f(input)).toStrictEqual(re);
});

/*
2
3
4
5
13
45 
*/
