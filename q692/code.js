// Question link: https://leetcode.com/problems/top-k-frequent-words/?envType=study-plan&id=level-1

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  // Solution 1: 31 mins. Inferior runtime and memory
  // Solution link: https://leetcode.com/problems/top-k-frequent-words/submissions/921923580/?envType=study-plan&id=level-1
  const map = {};
  for (let word of words) {
    map[word] = map[word] ? map[word] + 1 : 1;
  }

  const mapArray = Object.entries(map).map((val) => val);

  mapArray.sort((a, b) =>
    b[1] - a[1] !== 0 ? b[1] - a[1] : a[0].localeCompare(b[0])
  );
  return mapArray.slice(0, k).map((val) => val[0]);

  // Forum Solution:
  //    - JS has no built-in heap library in place. Either using this manual method or build a mocked Heap
  //    - mapArray = Object.key() to extract the words rather than Object.entries() to save memory.
  // Solution link:
  //   https://leetcode.com/problems/top-k-frequent-words/solutions/651714/javascript-structured-min-heap-simulated-for-interview/
  // https://leetcode.com/problems/top-k-frequent-words/solutions/1549599/javascript-max-priority-queue-solution-explained/
};

// Below is for internal testing
module.exports = {
  f: topKFrequent,
};
