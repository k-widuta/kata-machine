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

## Trie
> They are pronounced like Tree (its named after Re"trie"val Tree). So its a Trie tree (but people keep calling them try trees / prefix / digital tree)!

- The easiest way to visualize a trie is to think of auto-complete


## Graph
> All trees are graphs, not all graphs are trees

### Graph terms
- cycle: When you start at Node(x), follow the links, and end back at Node(x)
- acyclic: A graph that contains no cycles
- connected: When every node has a path to another node
- directed: When there is a direction to the connections. Think Twitter
- undirected: !directed. Think Facebook (i haven't been on in 10 years, it may have changed)
- weighted: The edges have a weight associated with them. Think Maps
- dag: Means Directed, acyclic graph.

### Implementation terms
- node: a point or vertex on the graph
- edge: the connection betxit two nodes

### Big O
- BigO is commonly stated in terms of `V` and `E` where `V` stands for vertices and `E` stands for edges
- So `O(V * E)` means that we will check every vertex, and on every vertex we check every edge

### Representation
- adj list
- adj matrix

### Dijkstra Shortest Path
- if we use arrays - `O(V^2 + E)` runtime
- we should use `priority queue` to have the shortest path - `O(logV(V + E))`

## Maps
> its too easy to think of {} or new Map() and just assume we know them. The reality is that we know how to use them, most of the time we don't actually know they work.
(we wont demistify {}, those are different data structures than a hash map)

- load factor: The amount of data points vs the amount of storage (data.len / storage.capacity) - best one is `0.7`
- key: a value that is hashable and is used to look up data. The hash has to be consistent.
- value: a value that is associated with a key
- collision: when 2 keys map to the same cell.
