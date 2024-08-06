/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let i = 0;
    let j = 0;
    if(typed<name.length) return false
    while ( j < typed.length) {
        if (name[i] === typed[j]) {
            i++;
            j++;
        } else if (name[i - 1] === typed[j]) {
            j ++;
        } else {
            return false
        }
    }
    return i === name.length;

    
};