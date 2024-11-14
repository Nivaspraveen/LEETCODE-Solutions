/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    const phoneMap = {
        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
    };
    let result = [];
    const backtrack = (index, currCombination) => {
        if (currCombination.length === digits.length) {
            result.push(currCombination);
            return;
        }
        let letters = phoneMap[digits[index]];
        for (let letter of letters) backtrack(index + 1, currCombination + letter);
    };
    backtrack(0, '');
    return result;
};