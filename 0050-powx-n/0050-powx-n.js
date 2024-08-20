/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0){ 

        } 
    
        if(x==1){
            return 1;
        }
    
    let power = 1;
    let absN = n > 0 ? n : -n; 

    while (absN > 0) {
        if (absN % 2 === 1) {
            power *= x; // If absN is odd, multiply power by x
        }
        x *= x; // Square the base
        absN = Math.floor(absN / 2); // Reduce absN by half
    }

    return n < 0 ? 1 / power : power; // If n is negative, return the reciprocal
};