/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let maxScore = 0, maxValueOfI = values[0];
    for (let j = 1; j < values.length; j++) {
        let currScore = maxValueOfI + values[j] - j;
        maxScore = Math.max(maxScore, currScore);
        maxValueOfI = Math.max(maxValueOfI, values[j] + j);
    }
    return maxScore;
};