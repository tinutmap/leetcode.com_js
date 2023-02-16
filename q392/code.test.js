// // import f from code
const { f } = require('./code')

test('test 1', () => {
    const s = "abc", t = "ahbgdc"
    const re = true
    expect(f(s, t)).toStrictEqual(re)
})
test('test 2', () => {
    const s = "axc", t = "ahbgdc"
    const re = false
    expect(f(s, t)).toStrictEqual(re)
})
test('test 3', () => {
    const s = "", t = "ahbgdc"
    const re = true
    expect(f(s, t)).toStrictEqual(re)
})
test('test 4', () => {
    const s = "axc", t = ""
    const re = false
    expect(f(s, t)).toStrictEqual(re)
})
test('test 5', () => {
    const s = "aaaaaa",
        t = "bbaaaa"
    const re = false
    expect(f(s, t)).toStrictEqual(re)
})