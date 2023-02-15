// import f from code
const { f } = require('./code')

test('test 1', () => {
    const input = [1, 2, 3, 4]
    const re = [1, 3, 6, 10]
    expect(f(input)).toStrictEqual(re)
})

test('test 2', () => {
    const input = [1, 1, 1, 1, 1]
    const re = [1, 2, 3, 4, 5]
    expect(f(input)).toStrictEqual(re)
})

test('test 3', () => {
    const input = [3, 1, 2, 10, 1]
    const re = [3, 4, 6, 16, 17]
    expect(f(input)).toStrictEqual(re)
})
test('test 4', () => {
    const input = [2]
    const re = [2]
    expect(f(input)).toStrictEqual(re)
})