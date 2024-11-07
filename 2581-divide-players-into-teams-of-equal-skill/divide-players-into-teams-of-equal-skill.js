/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
    skill.sort((a, b) => a - b);
    let n = skill.length;
    let targetSum = skill[0] + skill[n - 1];
    let totalChem = 0;

    for(let i = 0; i < n / 2; i++) {
        let teamSkill = skill[i] + skill[n - 1 - i];
        if (teamSkill !== targetSum) return -1;
        totalChem += skill[i] * skill[n - 1 - i];
    }
    return totalChem;
};