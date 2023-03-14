// Question link: https://leetcode.com/problems/longest-palindrome/description/?envType=study-plan&id=level-1

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  //   // Solution 1: so so
  //   // Solution link https://leetcode.com/problems/longest-palindrome/submissions/901177164/
  //   const d={}
  //   let re = 0
  //   s=Array.from(s)
  //   s.forEach(char=>{
  //     if (!d[char]) {
  //       d[char] = 1
  //     } else {
  //       re +=2
  //       delete d[char]
  //     }
  //   })
  //   re+=Object.values(d).length > 0 ? 1 : 0
  //   return re
  //   return re;

  // // Solution 2: based on solution 1 with set but not much improvement.
  // // Solution link   // Solution 2: https://leetcode.com/problems/longest-palindrome/submissions/901701403/
  // const d = new Set();
  // let re = 0;
  // //   s.forEach((char) => {
  // for (char of s) {
  //   if (!d.has(char)) {
  //     d.add(char);
  //   } else {
  //     re += 2;
  //     d.delete(char);
  //   }
  // }
  // re += d.size > 0 ? 1 : 0;
  // return re;

  // Forum Solution:
  // Solution link https://leetcode.com/problems/longest-palindrome/solutions/391018/javascript-solution-with-a-single-for-loop/
  let ans = 0;
  let keys = {};

  for (let char of s) {
    keys[char] = (keys[char] || 0) + 1;
    if (keys[char] % 2 == 0) ans += 2;
  }
  return s.length > ans ? ans + 1 : ans;
};

// Below is for internal testing
module.exports = {
  f: longestPalindrome,
};
