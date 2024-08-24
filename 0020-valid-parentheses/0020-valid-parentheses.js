/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let stack = [];


    for (let i = 0; i < s.length; i++) {
        const char =s[i];

        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else {
            if (stack.lenth==0) {
                return false; // If there's no matching opening bracket
            }

            const topChar = stack.pop(); // Pop the top element and compare
            if (
                (char === ")" && topChar !== "(") ||
                (char === "}" && topChar !== "{") ||
                (char === "]" && topChar !== "[")
            ) {
                return false; // Mismatch found
            }
        }
    }

    return stack.length==0; // If stack is empty, all brackets matched

};