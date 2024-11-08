/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    const [year, month, day] = date.split('-');
    const yearBinary = parseInt(year, 10).toString(2),
        monthBinary = parseInt(month, 10).toString(2),
        dayBinary = parseInt(day, 10).toString(2);
    return `${yearBinary}-${monthBinary}-${dayBinary}`;
};