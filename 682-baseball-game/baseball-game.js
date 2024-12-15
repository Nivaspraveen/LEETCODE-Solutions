/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack = [];
    for (let op of operations) {
        (op === 'C') ? stack.pop()
            : (op === 'D') ? stack.push(2 * stack[stack.length - 1])
            : (op === '+') ? stack.push(stack[stack.length - 1] + stack[stack.length - 2])
            : stack.push(parseInt(op));
    }
    return stack.reduce((a, b) => a + b, 0);
};