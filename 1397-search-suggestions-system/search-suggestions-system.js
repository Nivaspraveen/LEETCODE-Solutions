/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
    products.sort();
    let result = [];
    let prefix = '';

    for (let c of searchWord) {
        prefix += c;
        let suggestions = [];
        for (let product of products) {
            if (product.startsWith(prefix)) {
                suggestions.push(product);
                if (suggestions.length === 3) break;
            }
        }
        result.push(suggestions);
    }
    return result;
};