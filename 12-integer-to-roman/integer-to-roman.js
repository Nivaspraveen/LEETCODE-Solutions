/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const romanNumerals = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1],
    ];

    let result = '';

    for(let i = 0; i < romanNumerals.length; i++) {
        while(num >= romanNumerals[i][1]) {
            result += (num >= romanNumerals[i][1]) ? romanNumerals[i][0] : '';
            num -= (num >= romanNumerals[i][1]) ? romanNumerals[i][1] : 0;
        }
    }

    return result;
};