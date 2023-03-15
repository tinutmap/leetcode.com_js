// Question link: https://leetcode.com/problems/climbing-stairs/?envType=study-plan&id=level-1
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // Solution 1: superior solution. Similar to Fibinnaci but with different inputs. Time 15:44
  // Solution link https://leetcode.com/problems/climbing-stairs/submissions/915889105/?envType=study-plan&id=level-1

  if (n <= 2) return n;
  let [a, b] = [1, 2];

  for (i = 3; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a + b;

  // Forum Solution: basically the same with added recursion technique.
  // Solution link https://leetcode.com/problems/climbing-stairs/solutions/914779/dp-recursion-w-memo-two-js-solutions/
};

// Below is for internal testing
module.exports = {
  f: climbStairs,
};
