// import f from code
const { f } = require("./code");

test("test 1", () => {
  const secret = "1807",
    guess = "7810";
  const re = "1A3B";
  expect(f(secret, guess)).toStrictEqual(re);
});
test("test 2", () => {
  const secret = "1123",
    guess = "0111";
  const re = "1A1B";
  expect(f(secret, guess)).toStrictEqual(re);
});
test("test 3", () => {
  const secret = "1234",
    guess = "4324";
  const re = "1A2B";
  expect(f(secret, guess)).toStrictEqual(re);
});
