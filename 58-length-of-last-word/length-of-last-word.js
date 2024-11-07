/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let length = 0;
    let foundWord = false;

    for(let i = s.length - 1; i >= 0; i--) {
        if(s[i] !== ' ') {
            if(!foundWord){
                foundWord = true
                };
            length++;
        } else if(foundWord) break;
    }

    return length;
};