/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [];
    for (let i = 0; i < asteroids.length; i++) {
        let asteroid = asteroids[i];
        while (asteroid < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {
            let top = stack[stack.length - 1];
            const absAsteroid = Math.abs(asteroid), absTop = Math.abs(top);
            asteroid = (absAsteroid > absTop) ? (stack.pop(), asteroid) : (absAsteroid < absTop ? 0 : (stack.pop(), 0));
        }
        if (asteroid !== 0) stack.push(asteroid);
    }
    return stack;
};