// import f from code
const { f } = require('./code')
const { createSinglyLinkedList, linkListToArray } = require('../linkedList/base')

test('test 1', () => {
    const list1 = [1, 2, 4],
        list2 = [1, 3, 4],
        re = [1, 1, 2, 3, 4, 4];
    const list1List = createSinglyLinkedList(list1),
        list2List = createSinglyLinkedList(list2),
        fToArray = linkListToArray(f(list1List, list2List));

    expect(fToArray).toStrictEqual(re)
})
test('test 2', () => {
    const list1 = [],
        list2 = [],
        re = [];
    const list1List = createSinglyLinkedList(list1),
        list2List = createSinglyLinkedList(list2),
        fToArray = linkListToArray(f(list1List, list2List));

    expect(fToArray).toStrictEqual(re)
})
test('test 3_1', () => {
    const list1 = [0],
        list2 = [],
        re = [0];
    const list1List = createSinglyLinkedList(list1),
        list2List = createSinglyLinkedList(list2),
        fToArray = linkListToArray(f(list1List, list2List));

    expect(fToArray).toStrictEqual(re)
})
test('test 3_2', () => {
    const list1 = [],
        list2 = [0],
        re = [0]
    const list1List = createSinglyLinkedList(list1),
        list2List = createSinglyLinkedList(list2),
        fToArray = linkListToArray(f(list1List, list2List));

    expect(fToArray).toStrictEqual(re)
})
test('test 4', () => {
    const list1 = [1, 2, 4, 5],
        list2 = [1, 3, 4],
        re = [1, 1, 2, 3, 4, 4, 5];
    const list1List = createSinglyLinkedList(list1),
        list2List = createSinglyLinkedList(list2),
        fToArray = linkListToArray(f(list1List, list2List));

    expect(fToArray).toStrictEqual(re)
})
test('test 5', () => {
    const list1 = [1, 2, 4],
        list2 = [1, 3, 4, 5],
        re = [1, 1, 2, 3, 4, 4, 5];
    const list1List = createSinglyLinkedList(list1),
        list2List = createSinglyLinkedList(list2),
        fToArray = linkListToArray(f(list1List, list2List));

    expect(fToArray).toStrictEqual(re)
})
test('test 6', () => {
    const list1 = [1],
        list2 = [1, 3, 4, 5],
        re = [1, 1, 3, 4, 5];
    const list1List = createSinglyLinkedList(list1),
        list2List = createSinglyLinkedList(list2),
        fToArray = linkListToArray(f(list1List, list2List));

    expect(fToArray).toStrictEqual(re)
})
test('test 7', () => {
    const list1 = [1, 3, 4, 5],
        list2 = [1],
        re = [1, 1, 3, 4, 5];
    const list1List = createSinglyLinkedList(list1),
        list2List = createSinglyLinkedList(list2),
        fToArray = linkListToArray(f(list1List, list2List));

    expect(fToArray).toStrictEqual(re)
})
test('test 8', () => {
    const list1 = [2],
        list2 = [1],
        re = [1, 2];
    const list1List = createSinglyLinkedList(list1),
        list2List = createSinglyLinkedList(list2),
        fToArray = linkListToArray(f(list1List, list2List));

    expect(fToArray).toStrictEqual(re)
})