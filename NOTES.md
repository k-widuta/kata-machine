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
