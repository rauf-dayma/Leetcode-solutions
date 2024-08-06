/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxarr =nums[0];
    for(i=1; i<nums.length; i++){
        nums[i] = Math.max(0, nums[i - 1]) + nums[i];
    
        if (nums[i] > maxarr)
            maxarr = nums[i];
        
        
    }
    return maxarr
};