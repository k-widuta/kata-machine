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

# AVL
> `O(log(N))` for everything
- best for `SEARCHING` but not so good for inserting 

![Screenshot 2024-07-25 at 19 00 25](https://github.com/user-attachments/assets/c3625778-4967-4675-b428-ea87de491ea8)

### Balance factor
> Balance factor should be between: -1, 0, 1

- to calculate balance factor - `Right Node height - Left Node height`
- that way `-1` is the lean to the left, and `1` is lean to the right

### RR rotation
> Remember that tree is leaning to the right side - but rotation is made to the `left` side (to balance the tree)

### LL rotation
> Remember that tree is leaning to the left side - but rotation is made to the `right` side (to balance the tree)

## More complicated rotations

### LR rotation
![Screenshot 2024-07-25 at 19 17 29](https://github.com/user-attachments/assets/fe6bd6d3-ff39-4dea-b741-9737f768b773)

![Screenshot 2024-07-25 at 19 19 22](https://github.com/user-attachments/assets/f414627a-a707-4deb-ae60-8be9eb87760f)

> Left leaning rotation & right rotation
- first we need to `RR` the lower node
- then we finish with `LL rotation`

### RL rotation
![Screenshot 2024-07-25 at 19 20 18](https://github.com/user-attachments/assets/21fd416b-d89b-432a-9fc4-2a2117afc8f6)

![Screenshot 2024-07-25 at 19 21 29](https://github.com/user-attachments/assets/eaa37c03-eca7-40da-b87b-cf7f04324409)

![Screenshot 2024-07-25 at 19 21 49](https://github.com/user-attachments/assets/03382f9b-4105-4440-a44b-3387c83fccd4)

> Right leaning rotation & left leaning rotation
- first we need to `LL` the lower node
- then we finish with `RR rotation`

### Having more children
> remember the basics - on the left the values are smaller & on the right are larger

![Screenshot 2024-07-25 at 19 23 02](https://github.com/user-attachments/assets/5dbb8886-60a1-40d1-a03f-ff11eacaa34b)

![Screenshot 2024-07-25 at 19 24 09](https://github.com/user-attachments/assets/1452f33c-9da0-4a6d-ac29-4a06817bcde2)

# Red-black tree

1. Every node is either red or black.
2. The root is black
3. Every leaf (NIL) is black
4. If a node is red, then both its children are black
5. For each node, all simple paths from the node to descendant leaves contain the same number of black nodes
6. (Conclusion) If a node N has exactly one child, it must be a red child, because if it were black, its NIL descendants would sit at a different black depth than N's NIL child, violating requirement 4.
