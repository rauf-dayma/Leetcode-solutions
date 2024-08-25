/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {

    stack = [s[0]];

    for(let i=1; i<s.length; i++){
        let top = stack[stack.length-1];
        if(s[i]== top){
            stack.pop()
        }else{
            stack.push(s[i]);
        }
    }

    let str = stack.join("");
    return str;
    
};