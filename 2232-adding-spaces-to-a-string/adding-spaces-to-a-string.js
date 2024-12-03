/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let result = [], spaceIndex = 0, n = s.length, m = spaces.length;
    for (let i = 0; i < n; i++) {
        // If the current index matches the space index, add a space
        if (spaceIndex < m && i === spaces[spaceIndex]) {
            result.push(' ');
            spaceIndex++;
        }
        // Add the current character from the string
        result.push(s[i]);
    }
    // Join the result array into a single string
    return result.join('');
};