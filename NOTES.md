## Notes
> Things to remember about algorithms and data structures. Sometimes specific to the given language.


## Array vs Slice in Go
In empty array we can access index like this:
```go
arr := [3]int{}
// It will work
arr[0] = 69
```
But in slices it's impossible:
```go
slice := []int{}
// It will throw error
slice[0] = 69
```

## Tree
- each level of balanced binary tree is approx. half the size of the tree above (including this level)
- **Depth-first search** preserves tree shape, while breadth-first search does not.

### Binary search tree
> On the left everything is smaller (or equal) to value

> On the right everything is greater to value
- if we insert a lot - use red-black algorithms
- if we find a lot - use AVL algorithms because tree will be almost perfectly balanced but insertions will be slow
- in-order traversal produces in-order array

## Heap
The simplest way to put it is a binary tree where every child and grand child is smaller (MaxHeap), or larger (MinHeap) than the current node.
• Whenever a node is added, we must adjust the tree
• Whenever a node is deleted, we must adjust the tree
• There is no traversing the tree
• It is self balancing
• It can be used for priority

### Underlying structure is array list
> Equations to get the child index node (i is the index of the current node)

- get the left child - `2i + 1` 
- get the right child - `2i + 2` 
- get the parent - `(i- 1) / 2` (remember that we use normal language and 5 / 2 == 2, not 2.5)
