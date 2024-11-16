/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const canFinish = speed => {
        let hrs = 0;
        for (const pile of piles) hrs += Math.ceil(pile / speed);
        return hrs <= h;
    };
    let left = 1, right = Math.max(...piles);
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        canFinish(mid) ? right = mid : left = mid + 1;
    }
    return left;
};