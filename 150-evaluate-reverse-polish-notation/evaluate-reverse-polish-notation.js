/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    for (const token of tokens) {
        if (!isNaN(token)) stack.push(Number(token));
        else {
            const b = stack.pop();
            const a = stack.pop();
            let res;
            switch (token) {
                case '+': 
                    res = a + b;
                    break;
                case '-': 
                    res = a - b;
                    break;
                case '*': 
                    res = a * b;
                    break;
                case '/':
                    res = (a / b) < 0 ? Math.ceil(a / b) : Math.floor(a / b);
                    break;
                default: throw new Error(`Unknown operator: ${token}`);
            }
            stack.push(res);
        }
    }
    return stack.pop();
};