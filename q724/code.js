/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    // Solution 1: OK solution
    // Solution link https://leetcode.com/problems/find-pivot-index/submissions/899244090/?envType=study-plan&id=level-1
    let leftSum = 0,
        sum = nums.reduce(((prev, cur) => prev + cur), 0);
    for (let i = 0; i < nums.length; i++) {
        sum -= nums[i]
        if (leftSum === sum) return i
        leftSum += nums[i]
    }
    return -1

    // Forum Solution: similar to solution 1
    // Solution link
};

// Below is for internal testing
// pivotIndex([1, 7, 3, 6, 5, 6])
module.exports = {
    f: pivotIndex
}