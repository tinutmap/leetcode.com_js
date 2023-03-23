// import f from code
const { f } = require("./code");

test("test 1", () => {
  const s = "ab#c";
  const t = "ad#c";
  const re = true;
  expect(f(s, t)).toStrictEqual(re);
});

test("test 2", () => {
  const s = "ab##";
  const t = "c#d#";
  const re = true;
  expect(f(s, t)).toStrictEqual(re);
});

test("test 3", () => {
  const s = "a#c";
  const t = "b";
  const re = false;
  expect(f(s, t)).toStrictEqual(re);
});

test("test 4", () => {
  const s = "#ca";
  const t = "ca";
  const re = true;
  expect(f(s, t)).toStrictEqual(re);
});
test("test 5", () => {
  const s = "#ca";
  const t = "#ca";
  const re = true;
  expect(f(s, t)).toStrictEqual(re);
});

test("test 6", () => {
  const s = "bxj##tw";
  const t = "bxo#j##tw";
  const re = true;
  expect(f(s, t)).toStrictEqual(re);
});

test("test 7", () => {
  const s = "aaa###a";
  const t = "aaaa###a";
  const re = false;
  expect(f(s, t)).toStrictEqual(re);
});
/* 
"ab#c"
"ad#c"
"ab##"
"c#d#"
"a#c"
"b"
"#ca"
"ca"
"#ca"
"#ca"
"aaa###a"
"aaaa###a" 
*/
