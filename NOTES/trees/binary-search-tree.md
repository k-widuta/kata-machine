# Binary search tree
> On the left everything is smaller (or equal) to value

> On the right everything is greater to value
- if we insert a lot - use red-black algorithms
- if we find a lot - use AVL algorithms because tree will be almost perfectly balanced but insertions will be slow
- in-order traversal produces in-order array
- search time is `O(logN)`

## Removing the node with 2 children
- if we choose the largest on the smaller side (left side) - it's in-order predecessor
    - we go `left` and then `all the way right`
- if we choose the smallest on the larger side (right side) - it's in-order successor
    - we go `right` and then `all the way left`
