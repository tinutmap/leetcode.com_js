// Question link: https://leetcode.com/problems/backspace-string-compare/?envType=study-plan&id=level-1

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  // // Solution 1: inferior and chaotic due to unsuccessful approach using method of removing the original array. Lots of edge cases missed as well, see test case 6 and 7. Time 33 mins
  // // Solution link https://leetcode.com/problems/backspace-string-compare/submissions/920371605/?envType=study-plan&id=level-1
  // const arr1 = [];
  // const arr2 = [];
  // for (char of s) {
  //   if (char === "#") {
  //     arr1.pop();
  //   } else {
  //     arr1.push(char);
  //   }
  // }

  // // for (let i = t.length - 1; i >= 0; ) {
  // //   if (t[i] === "#") {
  // //     i--;
  // //   } else if (t[i] !== arr.at(-1)) {
  // //     return false;
  // //   } else {
  // //     arr.pop();
  // //   }
  // //   if (t[i] !== "#") {
  // //     i--;
  // //   }
  // //   // i--;
  // // }

  // for (char of t) {
  //   if (char === "#") {
  //     arr2.pop();
  //   } else {
  //     arr2.push(char);
  //   }
  // }
  // if (arr1.length !== arr2.length) {
  //   return false;
  // }
  // for (let i = 0; i < arr1.length; i++) {
  //   if (arr1[i] !== arr2[i]) {
  //     return false;
  //     break;
  //   }
  // }

  // return true;

  // Solution 2: top notched runtime. average memory.
  // Solution link https://leetcode.com/problems/backspace-string-compare/submissions/920768061/?envType=study-plan&id=level-1
  const arr = [];
  for (char of s) {
    if (char === "#") {
      arr.pop();
    } else {
      arr.push(char);
    }
  }
  let backspaces = 0;
  for (let i = t.length - 1; i >= 0; ) {
    if (t[i] === "#") {
      backspaces += 1;
    } else if (backspaces > 0) {
      backspaces -= 1;
    } else if (t[i] !== arr.at(-1)) {
      return false;
    } else {
      arr.pop();
    }
    i--;
  }

  return arr.length === 0;

  // Forum Solution: similar to solution 1
  // Solution link: https://leetcode.com/problems/backspace-string-compare/solutions/573541/javascript-easy-to-understand-o-n-solution/
};

// Below is for internal testing
module.exports = {
  f: backspaceCompare,
};
