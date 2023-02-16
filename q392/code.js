// Question link: https://leetcode.com/problems/is-subsequence/?envType=study-plan&id=level-1
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {

    // Solution 1: Superior solution, an error at first at `lelfIndexT = newLeftIndexT + 1`
    // Solution link https://leetcode.com/problems/is-subsequence/submissions/899384814/?envType=study-plan&id=level-1
    if (!s) return true
    if (!t) return false

    let lelfIndexT = 0
    for (let i = 0; i < s.length; i++) {
        const newLeftIndexT = t.indexOf(s[i], lelfIndexT)
        if (newLeftIndexT < lelfIndexT) return false
        lelfIndexT = newLeftIndexT + 1
    }
    return true

    // Forum Solution: Technically speaking, 2-pointer is more efficient with O(s+t)) whereas solution 1's O(n^2)
    // Solution link https://leetcode.com/problems/is-subsequence/solutions/2473010/very-easy-100-fully-explained-java-c-python-js-c-python3-two-pointers-approach/
}

// Below is for internal testing
module.exports = {
    f: isSubsequence
} 