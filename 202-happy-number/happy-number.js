/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const getNext = num => {
        let totalSum = 0;
        do {
            let digit = num % 10;
            num = Math.floor(num / 10);
            totalSum += digit ** 2;
        } while (num > 0);
        return totalSum;
    };
    let seen = new Set();
    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getNext(n);
    }
    return n === 1;
};