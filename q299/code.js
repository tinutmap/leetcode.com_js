// Question link: https://leetcode.com/problems/bulls-and-cows/?envType=study-plan&id=level-1

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  // Solution 1: above average runtime, not so good memory.
  // Solution link https://leetcode.com/problems/bulls-and-cows/submissions/920791964/?envType=study-plan&id=level-1
  const [sMap, gMap] = [{}, {}];
  let [x, y] = [0, 0];
  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      x += 1;
    } else {
      !sMap[secret[i]] ? (sMap[secret[i]] = 1) : (sMap[secret[i]] += 1);
      !gMap[guess[i]] ? (gMap[guess[i]] = 1) : (gMap[guess[i]] += 1);
    }
  }

  for (key of Object.keys(sMap)) {
    y += Math.min(sMap[key], gMap[key] ?? 0);
  }

  return `${x}A${y}B`;

  // Forum Solution: using one array of numbers with length = 10, each index is respective of digit 0-9, to save memory
  // Solution link https://leetcode.com/problems/bulls-and-cows/solutions/492044/javascript-93-83-one-pass/
};

// Below is for internal testing
module.exports = {
  f: getHint,
};
