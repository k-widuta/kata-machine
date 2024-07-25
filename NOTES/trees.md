# Trees
> Representation usually is the first step to understanding the problem, as long as you know what shapes you're working with, the rest isn't too hard.

- each level of balanced binary tree is approx. half the size of the tree above (including this level)
- **Depth-first search** preserves tree shape, while breadth-first search does not.

## Binary search tree
> On the left everything is smaller (or equal) to value

> On the right everything is greater to value
- if we insert a lot - use red-black algorithms
- if we find a lot - use AVL algorithms because tree will be almost perfectly balanced but insertions will be slow
- in-order traversal produces in-order array
- search time is `O(logN)`

### Removing the node with 2 children
- if we choose the largest on the smaller side (left side) - it's in-order predecessor
    - we go `left` and then `all the way right`
- if we choose the smallest on the larger side (right side) - it's in-order successor
    - we go `right` and then `all the way left`

## Trie
> They are pronounced like Tree (its named after Re"trie"val Tree). So its a Trie tree (but people keep calling them try trees / prefix / digital tree)!

- The easiest way to visualize a trie is to think of auto-complete

