/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function(expression) {
    const stack = [];   
    for (let char of expression) {
        if (char === ')') {
            const operands = [];
            while (stack[stack.length - 1] !== '(') operands.push(stack.pop());
            stack.pop(); 
            const operator = stack.pop();
            if (operator === '&') stack.push(operands.every(op => op === 't') ? 't' : 'f');
             else if (operator === '|') stack.push(operands.some(op => op === 't') ? 't' : 'f');
             else if (operator === '!') stack.push(operands[0] === 't' ? 'f' : 't');
        } 
        else if (char !== ',') stack.push(char);
    }
    return stack.pop() === 't';
};