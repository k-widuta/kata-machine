import { Trie } from "src/data-structures/trie";
import { describe, expect, test } from "vitest";

function createTrie(...words: string[]): Trie {
    const trie = new Trie()

    for (const word of words) {
        trie.insert(word)
    }

    return trie
}

describe("Trie test suite", function() {
    test("Adding words to trie", function() {
        const trie = createTrie("cat", "cats", "cattle");
        expect(trie.autocomplete("c")).toEqual(["cat", "cats", "cattle"])
    })

    test("Autocompletion on empty search word should return empty array", function() {
        const trie = createTrie("cat", "cats", "cattle");
        expect(trie.autocomplete("")).toEqual([])
    })

    test("Deletion should delete the word", function() {
        const trie = createTrie("cat", "cats", "cattle");
        trie.delete("cat")
        expect(trie.autocomplete("c")).toEqual(["cats", "cattle"])
    })

    test("Deletion part of the word should not work", function() {
        const trie = createTrie("cat", "cats", "cattle");
        trie.delete("catt")
        expect(trie.autocomplete("c")).toEqual(["cat","cats", "cattle"])
    })

    test("Deletion of the words that doesn't exist should do nothing", function() {
        const trie = createTrie("cat", "cats", "cattle");
        trie.delete("bull")
        expect(trie.autocomplete("c")).toEqual(["cat","cats", "cattle"])
    })

}) 
