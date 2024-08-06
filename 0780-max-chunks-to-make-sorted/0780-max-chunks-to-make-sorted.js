/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let maximum = 0;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        maximum = Math.max(maximum, arr[i]);
        if (maximum === i) {
            sum++;
        }
    }

    return sum;
};