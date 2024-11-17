/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
class UnionFind {
    constructor() {
        this.parent = new Map();
        this.product = new Map();
    }

    find(x) {
        if (!this.parent.has(x)) {
            this.parent.set(x, x);
            this.product.set(x, 1);
        }
        if (this.parent.get(x) !== x) {
            const originalParent = this.parent.get(x), 
                originalProduct = this.product.get(x),
                newParent = this.find(originalParent);
            this.product.set(x, originalProduct * this.product.get(originalParent));
            this.parent.set(x, newParent);
        }
        return this.parent.get(x);
    }

    union(x, y, value) {
        const rootX = this.find(x), rootY = this.find(y);
        if (rootX !== rootY) {
            this.parent.set(rootX, rootY);
            this.product.set(rootX, this.product.get(y) * value / this.product.get(x));
        }
    }
}

var calcEquation = function(equations, values, queries) {
    const unionFind = new UnionFind();
    for (let i = 0; i < equations.length; i++) {
        const [a, b] = equations[i], value = values[i];
        unionFind.union(a, b, value);
    }
    const result = [];
    for (const [c, d] of queries) {
        if (!unionFind.parent.has(c) || !unionFind.parent.has(d)) result.push(-1.0);
        else {
            const rootC = unionFind.find(c), rootD = unionFind.find(d);
            rootC !== rootD ? result.push(-1.0) : result.push(unionFind.product.get(c) / unionFind.product.get(d));
        }
    }
    return result;
};