// import f from code
const { f } = require("./code");

test("test 1", () => {
  const input = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ];
  const re = 1;
  expect(f(input)).toStrictEqual(re);
});

test("test 2", () => {
  const input = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ];
  const re = 3;
  expect(f(input)).toStrictEqual(re);
});

test("test 3", () => {
  const input = [
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ];
  const re = 0;
  expect(f(input)).toStrictEqual(re);
});
