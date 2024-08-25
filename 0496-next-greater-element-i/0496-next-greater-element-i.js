/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const stack = [];
    const nextGreaterMap = Array(nums2.length).fill(-1); // Array to store next greater elements for nums2

    // Traverse nums2 from right to left
    for (let i = nums2.length - 1; i >= 0; i--) {
        // Pop elements from the stack until we find a greater one
        while (stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
            stack.pop();
        }

        // If the stack is not empty, the top element is the next greater element
        if (stack.length > 0) {
            nextGreaterMap[i] = stack[stack.length - 1];
        }

        // Push the current element to the stack
        stack.push(nums2[i]);
    }

    // Create the answer array by mapping from nums1 to nums2
    const ans = [];
    for (let i = 0; i < nums1.length; i++) {
        // Find the index of nums1[i] in nums2
        const indexInNums2 = nums2.indexOf(nums1[i]);
        // Use the precomputed next greater element from nextGreaterMap
        ans.push(nextGreaterMap[indexInNums2]);
    }

    return ans;
}