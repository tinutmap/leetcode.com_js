// Question link:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // Solution 1: best compute time with trade-off of inferior memory
  // Solution link: https://leetcode.com/problems/two-sum/submissions/919814840/
  const map = {};
  for ([key, value] of nums.entries()) {
    let rem = target - value;
    if (map[rem] >= 0) {
      re = +[map[rem], key];
      return [map[rem], key];
    }
    map[value] = key;
  }

  // Forum Solution: other possible methods
  // Solution link https://leetcode.com/problems/two-sum/solutions/3070799/short-c-java-python-js-explained-solution-beginner-friendly/?orderBy=most_votes
};

// Below is for internal testing
module.exports = {
  f: testFunction,
};
