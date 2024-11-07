/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    const result = [];
    let readIndex = 0;
    while (readIndex < chars.length) {
        const currChar = chars[readIndex];
        let count = 0;
        while (readIndex < chars.length && chars[readIndex] === currChar){
            readIndex++;
            count++;
        }
        result.push(currChar);
        if (count > 1) result.push(...count.toString());
    }
    for (let i = 0; i < result.length; i++) chars[i] = result[i];
    return result.length;
};