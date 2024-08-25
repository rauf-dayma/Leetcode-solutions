/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
     if (height.length === 0) return 0;

    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let waterTrapped = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            // Process the left pointer
            if (height[left] >= leftMax) {
                leftMax = height[left]; // Update leftMax
            } else {
                waterTrapped += leftMax - height[left]; // Add trapped water
            }
            left++;
        } else {
            // Process the right pointer
            if (height[right] >= rightMax) {
                rightMax = height[right]; // Update rightMax
            } else {
                waterTrapped += rightMax - height[right]; // Add trapped water
            }
            right--;
        }
    }

    return waterTrapped;
};