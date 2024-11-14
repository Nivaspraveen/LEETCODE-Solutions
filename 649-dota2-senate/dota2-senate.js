/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
   const radiantQueue = [], direQueue = [];
   for (let i = 0; i < senate.length; i++) {
        senate[i] === 'R' ? radiantQueue.push(i) : direQueue.push(i);
   } 
   while (radiantQueue.length > 0 && direQueue.length > 0) {
        const radiantSenator = radiantQueue.shift(), direSenator = direQueue.shift();
        radiantSenator < direSenator ? 
            radiantQueue.push(radiantSenator + senate.length) :
            direQueue.push(direSenator + senate.length);
   }
   return radiantQueue.length > 0 ? 'Radiant' : 'Dire';
};