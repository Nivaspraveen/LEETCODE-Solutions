/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    return Array.from({ length: n }, (_, i) => {
        const num = i + 1;
        return (num % 3 === 0 && num % 5 === 0) ? 'FizzBuzz'
            : (num % 3 === 0) ? 'Fizz'
            : (num % 5 === 0) ? 'Buzz'
            : num.toString();
    });
};