// Question link:
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // Solution 1: naive recursion. Stack overflown!
  // Solution link
  //   let re = 0;
  //   function traverse(i, j) {
  //     if (i >= m || j >= n) return;
  //     if (i === m - 1 && j === n - 1) return (re += 1);
  //     traverse(i + 1, j);
  //     traverse(i, j + 1);
  //   }
  //   traverse(0, 0);
  //   return re;

  // Solution 2: so so performance. Time: 25:02 due to Solution 1 stack overflown
  // Solution link https://leetcode.com/problems/unique-paths/submissions/916506216/?envType=study-plan&id=level-1
  const arr = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => 1)
  );
  for (i = 1; i < m; i++) {
    for (j = 1; j < n; j++) {
      arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
    }
  }

  return arr[m - 1][n - 1];
  // Forum Solution: good additional solutions using math permutation and recursion + momoization
  // Solution link https://leetcode.com/problems/unique-paths/solutions/474165/python-js-java-go-c-by-o-mn-dp-with-explanation/
};

// Below is for internal testing
module.exports = {
  f: uniquePaths,
};
