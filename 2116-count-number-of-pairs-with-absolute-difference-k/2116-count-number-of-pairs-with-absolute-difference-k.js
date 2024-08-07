/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {

let sum = 0; 

    for (let i = 0; i<nums.length; i++){
        for(j=i+1; j<nums.length; j++){
            if(nums[i]-nums[j] == k || nums[j]-nums[i] == k){
                sum++;
            }
        
        }
    }

return(sum);

};