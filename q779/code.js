// Question link: https://leetcode.com/problems/k-th-symbol-in-grammar/
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
  //   // Solution 1: Timeout as array explode with 2**n in length. Time 30mins
  //   // Solution link
  //   const a = [0];
  //   for (let i = 2; i <= n; i++) {
  //     for (let j = 1; j <= 2 ** (i - 2); j++) {
  //       let e = a.shift();
  //       if (e === 0) {
  //         a.push(0, 1);
  //       } else {
  //         a.push(1, 0);
  //       }
  //     }
  //   }
  //   return a.at(k - 1);

  // Solution 2: not very good but working.
  // Solution link https://leetcode.com/problems/k-th-symbol-in-grammar/submissions/923342477/

  const a = [0, 1];
  k -= 1;
  let i = 0;
  while (k >= 2) {
    if (k > 2 ** (n - 2)) {
      i += 1;
      k = k % 2 ** (n - 2);
    }
    n -= 1;
  }

  i = i % 2;

  if (i === k) {
    return 0;
  }
  return 1;

  // Forum Solution: Using recursion or bit operation.
  // Solution link
  //  https://leetcode.com/problems/k-th-symbol-in-grammar/solutions/113697/my-3-lines-c-recursive-solution/
  // https://leetcode.com/problems/k-th-symbol-in-grammar/solutions/113736/python-java-c-easy-1-line-solution-with-detailed-explanation/?orderBy=most_votes
};

// Below is for internal testing
module.exports = {
  f: kthGrammar,
};
