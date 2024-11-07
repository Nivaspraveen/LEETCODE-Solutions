/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const len1 = s1.length;
    const len2 = s2.length;
    if (len1 > len2) return false;
    const count = new Array(26).fill(0);
    let diffCount = 0;
    for (let i = 0; i < len1; i++) {
        count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    for (let i = 0; i < 26; i++) {
        if (count[i] !== 0) diffCount++;
    }
    if (diffCount === 0) return true;
    for(let i = len1; i < len2; i++) {
        const startCharIndex = s2.charCodeAt(i - len1) - 'a'.charCodeAt(0);
        const endCharIndex = s2.charCodeAt(i) - 'a'.charCodeAt(0);
        if(count[startCharIndex] === 0) diffCount++;
        count[startCharIndex]++;
        if(count[startCharIndex] === 0) diffCount--;
        if(count[endCharIndex] === 0) diffCount++;
        count[endCharIndex]--;
        if(count[endCharIndex] === 0) diffCount--;
        if(diffCount === 0) return true;
    }
    return false;
};