/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let result = []
    let k = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] != nums[i]) {
                nums[k] =nums[i]

                k++
        }
    }
    return k
};
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])