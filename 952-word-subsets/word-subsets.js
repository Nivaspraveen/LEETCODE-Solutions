/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    // Function to count the frequency of characters in a word
    const getCharFrequency = (word) => {
        const freq = new Array(26).fill(0);
        for (const char of word) freq[char.charCodeAt(0) - 97]++;
        return freq;
    };

    // Combine all frequency requirements in words2
    const maxFreq = new Array(26).fill(0);
    for (const word of words2) {
        const freq = getCharFrequency(word);
        for (let i = 0; i < 26; i++) maxFreq[i] = Math.max(maxFreq[i], freq[i]);
    }

    // Filter words1 to find universal strings
    const result = [];
    for (const word of words1) {
        const freq = getCharFrequency(word);
        let isUniversal = true;
        for (let i = 0; i < 26; i++) {
            if (freq[i] < maxFreq[i]) {
                isUniversal = false;
                break;
            }
        }
        if (isUniversal) result.push(word);
    }
   return result;
};