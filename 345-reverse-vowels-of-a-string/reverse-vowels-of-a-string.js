/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = new Set('aeiouAEIOU');
    const sArr = s.split('');
    let left = 0, right = sArr.length - 1;
    while (left < right) {
        while (left < right && !vowels.has(sArr[left])) left++;
        while (left < right && !vowels.has(sArr[right])) right--;
        if (left < right) {
            [sArr[left], sArr[right]] = [sArr[right], sArr[left]];
            left++;
            right--;
        }
    }
    return sArr.join('');
};