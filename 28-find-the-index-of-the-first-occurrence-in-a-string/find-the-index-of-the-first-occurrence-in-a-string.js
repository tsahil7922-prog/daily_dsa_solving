var strStr = function (haystack, needle) {
    let duplicateMatched = "";

    for (let i = 0; i < haystack.length; i++) {

        for (let j = 0; j < needle.length; j++) {

            if (needle[j] === haystack[i + j]) {
                duplicateMatched += needle[j];
            } else {
                break;
            }
        }

        if (duplicateMatched === needle) {
            return i;
        }

        duplicateMatched = "";
    }

    return -1;
};

console.log(strStr("leetcode", "leeto"));