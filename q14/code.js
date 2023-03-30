// Question link: https://leetcode.com/problems/longest-common-prefix/?envType=study-plan&id=level-2
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // Solution 1: bad performance. Time 34 mins.
  // Solution link https://leetcode.com/problems/longest-common-prefix/submissions/924848392/?envType=study-plan&id=level-2
  let re = "";
  char = "";
  while (true) {
    for (let [index, str] of strs.entries()) {
      if (!char && str[0]) {
        char = str[0];
      } else if (str.length === 0 || char !== str[0]) {
        return re;
      }
      if (index === strs.length - 1) {
        re += char;
        char = "";
      }
      strs[index] = strs[index].slice(1);
    }
  }

  // // Forum Solution: Good case of using reduce()
  // // Solution link https://leetcode.com/problems/longest-common-prefix/solutions/6983/js-higher-order-function-solution-with-concise-and-easy-to-understand-code/
  // "use strict";
  // if (strs === undefined || strs.length === 0) {
  //   return "";
  // }
  // return strs.reduce((prev, next) => {
  //   let i = 0;
  //   while (prev[i] && next[i] && prev[i] === next[i]) i++;
  //   return prev.slice(0, i);
  // });
};

// Below is for internal testing
module.exports = {
  f: longestCommonPrefix,
};
