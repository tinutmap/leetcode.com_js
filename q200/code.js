// Question link:
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  //   // Solution 1: inferior. Time 35 mins
  //   // Solution link https://leetcode.com/problems/number-of-islands/submissions/915257493/
  //   let re = 0;
  //   const [m, n] = [grid.length, grid[0].length];

  //   for (i = 0; i < m; i++) {
  //     for (j = 0; j < n; j++) {
  //       if (grid[i][j] === "1") {
  //         traverse(i, j);
  //         re += 1;
  //       }
  //     }
  //   }
  //   return re;

  //   function traverse(r, c) {
  //     if (-1 < r && r < m && -1 < c && c < n && grid[r][c] === "1") {
  //       grid[r][c] = "0";
  //       for ([i, j] of [
  //         [-1, 0],
  //         [0, -1],
  //         [1, 0],
  //         [0, 1],
  //       ]) {
  //         traverse(r + i, c + j);
  //       }
  //     }
  //   }

  // Solution 2: based on solution 1, but exiting with || and return null. Not better performancewise. Time 35 mins
  // Solution link
  let re = 0;
  const [m, n] = [grid.length, grid[0].length];

  for (i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        traverse(i, j);
        re += 1;
      }
    }
  }
  return re;

  function traverse(r, c) {
    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] === "0") {
      return;
    }
    grid[r][c] = "0";
    for ([i, j] of [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ]) {
      traverse(r + i, c + j);
    }
    // }
  }

  // Forum Solution: not sure why it's better in performance. Maybe due to calling traverse 4 times instead of using for of []
  // Solution link https://leetcode.com/problems/number-of-islands/solutions/429842/javascript-dfs-commented-thought-process-beats-100-time-and-space/?orderBy=most_votes&languageTags=javascript
};

// Below is for internal testing
module.exports = {
  f: numIslands,
};
