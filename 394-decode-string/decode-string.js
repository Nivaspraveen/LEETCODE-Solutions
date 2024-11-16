/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [], currStr = '', currNum = 0;
    for (let char of s) {
        if (char >= '0' && char <= '9') currNum = currNum * 10 + (char - '0');
        else if (char === '[') {
            stack.push([currStr, currNum]);
            currStr = '';
            currNum = 0;
        }
        else if (char === ']') {
            let [prevStr, num] = stack.pop();
            currStr = prevStr + currStr.repeat(num);
        }
        else currStr += char;
    }
    return currStr;
};