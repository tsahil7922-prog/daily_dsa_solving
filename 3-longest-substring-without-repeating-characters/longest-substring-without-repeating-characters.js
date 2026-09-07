/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let max = 0
    let left = 0
    for (let i = 0; i < s.length; i++) {
        for (let j = left; j < i; j++) {
            if (s[j] === s[i]) {
                left = j + 1
                break;
            }

        }
        let length = i - left + 1
        if (length > max) {
            max = length
        }
    }
    return max

};