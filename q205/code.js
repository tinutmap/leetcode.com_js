// Question Link: https://leetcode.com/problems/isomorphic-strings/?envType=study-plan&id=level-1
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    // Solution 1: not so pleased solution as using 2 dicts.
    // Solution link https://leetcode.com/problems/isomorphic-strings/submissions/899330334/?envType=study-plan&id=level-1
    const dictS = {}, dictT = {}
    for (let i = 0; i < s.length; i++) {
        if (!dictS[s[i]] && !dictT[t[i]]) {
            dictS[s[i]] = t[i]
            dictT[t[i]] = s[i]
            continue;
        }
        if (dictS[s[i]] !== t[i]) return false
    }
    return true


    // Forum Solution: Great solution here, not needing using hash map but rather using string.indexOf method
    // Solution link https://leetcode.com/problems/isomorphic-strings/submissions/899330334/

}

// Below is for internal testing
module.exports = {
    f: isIsomorphic
} 