/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const stack = [];
    const components = path.split('/');
    for (const cmpnt of components) {
        if (cmpnt === '' || cmpnt === '.') continue;
        else if (cmpnt === '..') {
            if (stack.length > 0) stack.pop();
        } else stack.push(cmpnt);
    }
    return '/' + stack.join('/')
};