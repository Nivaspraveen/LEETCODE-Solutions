/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (t.length > s.length) return '';
    const targetFreq = {};
    for (const c of t) targetFreq[c] = (targetFreq[c] || 0) + 1;

    let left = 0, right = 0;
    let minLength = Infinity, minWindow = '', req = Object.keys(targetFreq).length, formed = 0;
    const windowFreq = {};

    while (right < s.length) {
        const char = s[right];
        windowFreq[char] = (windowFreq[char] || 0) + 1;
        if (targetFreq[char] && windowFreq[char] === targetFreq[char]) formed++;

        while (formed === req) {
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minWindow = s.substring(left, right + 1);
            }

            const leftChar = s[left];
            windowFreq[leftChar]--;
            if (targetFreq[leftChar] && windowFreq[leftChar] < targetFreq[leftChar]) formed--;
            left++;
        }
        right++;
    }
    return minWindow;
};