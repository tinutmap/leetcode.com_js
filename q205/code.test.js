// // import f from code
const { f } = require('./code')

test('test 1', () => {
    const s = "egg", t = "add";
    const re = true
    expect(f(s, t)).toStrictEqual(re)
})
test('test 2', () => {
    const s = "foo", t = "bar";
    const re = false
    expect(f(s, t)).toStrictEqual(re)
})
test('test 3', () => {
    const s = "paper", t = "title"
    const re = true
    expect(f(s, t)).toStrictEqual(re)
})
test('test 4', () => {
    const s = "badc", t = "baba"
    const re = false
    expect(f(s, t)).toStrictEqual(re)
})