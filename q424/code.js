// Question link: https://leetcode.com/problems/longest-repeating-character-replacement/?envType=study-plan&id=level-1
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  // Solution 1: Stuck during 52 mins...
  // Solution link

  // Solution 2: Based on editorial solution
  // Solution link https://leetcode.com/problems/longest-repeating-character-replacement/submissions/920187573/
  let [start, end, maxFrequency] = [0, -1, 0];
  const frequencyMap = {};
  while (end < s.length) {
    if (end + 1 - start - maxFrequency <= k) {
      end += 1;
      frequencyMap[s[end]] = frequencyMap[s[end]]
        ? frequencyMap[s[end]] + 1
        : 1;
      maxFrequency = Math.max(maxFrequency, frequencyMap[s[end]]);
    } else {
      frequencyMap[s[start]] -= 1;
      start += 1;
    }
  }

  return end - start;

  // Forum Solution: editorial solution. Wow, this must be a hard question...
  // Solution link https://leetcode.com/problems/longest-repeating-character-replacement/editorial/?envType=study-plan&id=level-1
};

// Below is for internal testing
characterReplacement("CAAABCBABBA", 2);
module.exports = {
  f: characterReplacement,
};
