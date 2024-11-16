/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stack = [];
    for (let char of s) char === '*' ? stack.pop() : stack.push(char);
    return stack.join('');
};