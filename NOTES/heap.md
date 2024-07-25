# Heap
> The simplest way to put it is a binary tree where every child and grand child is smaller (MaxHeap), or larger (MinHeap) than the current node.

• Whenever a node is added, we must adjust the tree
• Whenever a node is deleted, we must adjust the tree
• There is no traversing the tree
• It is self balancing
• It can be used for priority

## Underlying structure is array list
> Equations to get the child index node (`i` is the index of the current node)

- get the left child - `2i + 1` 
- get the right child - `2i + 2` 
- get the parent - `(i- 1) / 2` (remember that we use normal language and 5 / 2 == 2, not 2.5)

### Insertion
- we put the node at the end of heap
- we `heapify up` the node till heap rules are met

### Deletion
- we delete the first node
- put the last node on the first place
- `heapify down` till heap rules are met
