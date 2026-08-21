/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0
    let right = height.length - 1
    let max = 0

    while (left < right) {
        let length
        if (height[left] < height[right]) {
            length = height[left]
        } else {
            length = height[right]
        }

        let width = right - left
        let area = length * width
        if (area > max) {
            max = area
        }
        if (height[left] < height[right]) { 
            left++ } 
            else { 
                right--
                 }


    }
    return max
};