var TrieNode = function() {
    this.children = {};
    this.isEndOfWord = false;
}

var Trie = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let currNode = this.root;
    for (let c of word) {
        if (!currNode.children[c]) currNode.children[c] = new TrieNode();
        currNode = currNode.children[c];
    }
    currNode.isEndOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let currNode = this.root;
    for (let c of word) {
        if (!currNode.children[c]) return false;
        currNode = currNode.children[c];
    }
    return currNode.isEndOfWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let currNode = this.root;
    for (let c of prefix) {
        if (!currNode.children[c]) return false;
        currNode = currNode.children[c];
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */