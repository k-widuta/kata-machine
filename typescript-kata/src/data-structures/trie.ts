export class TrieNode {
    val: string | null;
    isWord: boolean;
    children: (TrieNode | null)[];

    constructor(val: string | null = null) {
        this.val = val;
        this.isWord = false;
        this.children = new Array(26).fill(null);
    }
}

export class Trie {
    root: TrieNode;

    constructor() {
        this.root= new TrieNode();
    }

    insert(word: string): void {
        let curr = this.root
        for (let i = 0; i < word.length; ++i) {
            const index = this.calculateIndex(word[i]);
            if (curr.children[index] !== null) {
                curr = curr.children[index];
                continue;
            }

            const newNode = new TrieNode(word[i]);
            if (i === word.length - 1) {
                newNode.isWord = true;
            }
            curr.children[index] = newNode
            curr = newNode
        }
    }

    delete(word: string): void {
        this.walkToDelete(this.root, word, 0)
    }

    autocomplete(word: string): string[] {
        let curr = this.root;
        for (let i = 0; i < word.length; ++i) {
            const index = this.calculateIndex(word[i]);
            if (curr.children[index] !== null) {
                curr = curr.children[index];
                continue;
            }
            return [""]
        }
        if (curr === this.root) {
            return []
        }
        return this.walkToAutocomplete(curr, "", []);
    }

    private walkToAutocomplete(curr: TrieNode | null, word: string, words: string[]): string[] {
        if (!curr || !curr.val) {
            return words;
        }
        if (curr.isWord) {
            if (this.hasNoChild(curr)) {
                word += curr.val;
                words.push(word);
                return words;
            }

            // If it's not leaf node - add that word and continue
            words.push(word + curr.val)
        }

        // Pre
        word += curr.val

        // Recursive
        for (const child of curr.children) {
            this.walkToAutocomplete(child, word, words)
        }

        // Post
        word.slice(0, -1)

        return words
    }

    private walkToDelete(curr: TrieNode | null, word: string, depth: number): boolean  {
        if (!curr) {
            return false;
        }

        if (depth > word.length) {
            return false;
        }
        
        if (depth === word.length) {
            if (curr.isWord) {
                curr.isWord = false;

                return this.hasNoChild(curr);
            }
            return false;
        }

        const index = this.calculateIndex(word[depth]);
        depth += 1;
        const canBeDeleted = this.walkToDelete(curr.children[index], word, depth);

        if (canBeDeleted) {
            curr.children[index] = null;

            return this.hasNoChild(curr);
        }

        return false;
    }

    private calculateIndex(char: string): number {
        const zero = "a".charCodeAt(0);
        return char.charCodeAt(0) - zero;
    }

    private hasNoChild(node: TrieNode): boolean {
        for (const child of node.children) {
            if (child !== null) {
                return false
            }
        }

        return true
    }
}
