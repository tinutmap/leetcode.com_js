/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    // // Solution 1: OK, it's been a while... https://leetcode.com/problems/running-sum-of-1d-array/submissions/898713597/
    // if (nums.length === 1) return nums
    // const sums = [nums[0]]
    // for (let i = 1; i < nums.length; i++) {
    //     sums.push(sums.at(-1) + nums[i])
    // }
    // return sums

    // // Solution 2: Superior memory,  OK Runtime https://leetcode.com/problems/running-sum-of-1d-array/submissions/898726887/
    // var lastSum = 0
    // return nums.map((num) => {
    //     const newSum = num + lastSum
    //     lastSum = newSum
    //     return newSum
    // })

    // Solution 3: tweaking from  Solution 2 by suggestion from leetcode user. https://leetcode.com/problems/running-sum-of-1d-array/submissions/898730123/
    var lastSum = 0
    return nums.map(num => lastSum += num)
};

// Below is for internal testing
runningSum([1, 2, 3, 4])
module.exports = {
    f: runningSum
} 