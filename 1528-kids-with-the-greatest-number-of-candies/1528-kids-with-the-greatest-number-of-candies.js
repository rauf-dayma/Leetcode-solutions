/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    var temp = [];
    const max = Math.max(...candies);
    
   for (let i=0; i<candies.length; i++){
    if(candies[i]+extraCandies >= max){
        temp.push(true)
    }else{
        temp.push(false)
    }
   }
   return temp;
};