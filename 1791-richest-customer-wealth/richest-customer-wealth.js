/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    // Built-in method
    // return Math.max(...accounts.map(customer => customer.reduce((sum, money) => sum + money, 0)));

    //normal iterative approach
    let maxWealth = 0;
    for (let i = 0; i < accounts.length; i++) {
        let currWealth = 0;
        for (let j = 0; j < accounts[i].length; j++) currWealth += accounts[i][j];
        if (currWealth > maxWealth) maxWealth = currWealth;
    }
    return maxWealth;
};