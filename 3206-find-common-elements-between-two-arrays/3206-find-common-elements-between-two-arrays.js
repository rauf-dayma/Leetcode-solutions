/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {

    let answer = [];
    let ans1 = 0;
    let ans2 = 0;

    for (let i=0; i<nums1.length; i++){
       if (nums2.includes(nums1[i])) {
            ans1++;
        }
    }

     for (let j=0; j<nums2.length; j++){
       if (nums1.includes(nums2[j])) {
            ans2++;
        }
}


    answer.push(ans1, ans2);
    return answer ;
    
};