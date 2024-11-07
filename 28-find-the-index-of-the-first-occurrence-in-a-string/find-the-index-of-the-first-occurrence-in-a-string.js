/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const haystackLength = haystack.length;
    const needleLength = needle.length;

    if(needleLength === 0) return 0;
    if(needleLength > haystackLength) return -1;
    for(i = 0; i <= haystackLength - needleLength; i++) {
        if(haystack.substring(i, i + needleLength) === needle) return i;
    }
    return -1;
};