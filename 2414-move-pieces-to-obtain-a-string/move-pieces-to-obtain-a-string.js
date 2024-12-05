/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function(start, target) {
    if (start.length !== target.length) return false;
    let s = start.replace(/_/g, ''), t = target.replace(/_/g, '');
    if (s !== t) return false;

    let SL = [], TL = [], SR = [], TR = [];
    for (let i = 0; i < start.length; i++) {
        if (start[i] === 'L') SL.push(i);
        if (target[i] === 'L') TL.push(i);
        if (start[i] === 'R') SR.push(i);
        if (target[i] === 'R') TR.push(i);
    }
    for (let i = 0; i < SL.length; i++) {
        if (SL[i] < TL[i]) return false;
    }
    for (let i = 0; i < SR.length; i++) {
        if (SR[i] > TR[i]) return false;
    }
    return true;
};