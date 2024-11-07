function maxPoints(points) {
    if (points.length < 2) return points.length;
    let maxPointsOnLine = 0;
    for (let i = 0; i < points.length; i++) {
        const slopes = new Map();
        let duplicates = 1;
        for (let j = i + 1; j < points.length; j++) {
            if (points[i][0] === points[j][0] && points[i][1] === points[j][1]) duplicates++;
            else {
               const dx = points[j][0] - points[i][0], dy = points[j][1] - points[i][1]; 
               const gcd = getGCD(dx, dy); 
               const slope = `${dy / gcd}/${dx / gcd}`; 
               slopes.set(slope, (slopes.get(slope) || 0) + 1); 
            }
        }
        for (let count of slopes.values()) maxPointsOnLine = Math.max(maxPointsOnLine, count + duplicates);
        maxPointsOnLine = Math.max(maxPointsOnLine, duplicates);
    }
    return maxPointsOnLine;
}
const getGCD = (a, b) => b === 0 ? a : getGCD(b, a % b); 

