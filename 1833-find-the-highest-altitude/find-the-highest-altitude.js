/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let currAlt = 0, maxAlt = 0;
    for (i = 0; i < gain.length; i++) {
        currAlt += gain[i];
        if (currAlt > maxAlt) maxAlt = currAlt;
    }
    return maxAlt;
};