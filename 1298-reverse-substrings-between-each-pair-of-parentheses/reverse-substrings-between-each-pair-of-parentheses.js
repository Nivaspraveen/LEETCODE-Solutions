/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    const stack = [];
    let currStr = '';

    for (const c of s) {
        if (c === '(') {
            stack.push(currStr);
            currStr = '';
        } else if (c === ')') {
            let revStr = '';
            for (let i = currStr.length - 1; i >= 0; i--) revStr += currStr[i];
            currStr = stack.pop() + revStr;
        } else currStr += c;
    }
    return currStr;
};