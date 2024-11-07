/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let fiveCount = 0;
    let tenCount = 0;

    for (let bill of bills) {
        bill === 5 ? fiveCount++
            : bill === 10
                ? (fiveCount > 0 ? (fiveCount--, tenCount++) : (fiveCount = -1))
                : (tenCount > 0 && fiveCount > 0
                    ? (tenCount--, fiveCount--) : (fiveCount >= 3
                        ? fiveCount -= 3 : fiveCount = -1)
                );
        if (fiveCount < 0) return false;
    }
    return true;
};