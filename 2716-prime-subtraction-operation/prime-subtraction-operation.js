/**
 * @param {number[]} nums
 * @return {boolean}
 */
var primeSubOperation = function(nums) {
    const primes = [];
    for (let i = 2; i <= 1000; ++i) {
        let isPrime = true;
        for (const prime of primes) {
            if (i % prime === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(i);
    }

    const findLargestPrime = target => {
        let left = 0, right = primes.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (primes[mid] > target) right = mid;
            else left = mid + 1;
        }
        return left;
    };

    const n = nums.length;
    for (let i = n - 2; i >= 0; --i) {
        if (nums[i] < nums[i + 1]) continue;
        const primeIndex = findLargestPrime(nums[i] - nums[i + 1]);
        if (primeIndex === primes.length || primes[primeIndex] >= nums[i]) return false;
        nums[i] -= primes[primeIndex];
    }
    return true;
};