// // import f from code
const { f } = require('./code')

test('test 1', () => {
    const input = [1, 7, 3, 6, 5, 6]
    const re = 3
    expect(f(input)).toStrictEqual(re)
})
test('test 2', () => {
    const input = [1, 2, 3]
    const re = -1
    expect(f(input)).toStrictEqual(re)
})
test('test 3', () => {
    const input = [2, 1, -1]
    const re = 0
    expect(f(input)).toStrictEqual(re)
})
test('test 4', () => {
    const input = [1, -1, 2]
    const re = 2
    expect(f(input)).toStrictEqual(re)
})