# Red-black tree
> If the shortest path (only black nodes) is `h`, the longest path (black and red nodes) is `2h`

1. Every node is either red or black.
2. The root is black
3. Every leaf (NIL) is black
4. If a node is red, then both its children are black
5. For each node, all simple paths from the node to descendant leaves contain the same number of black nodes
6. (Conclusion) If a node N has exactly one child, it must be a red child, because if it were black, its NIL descendants would sit at a different black depth than N's NIL child, violating requirement 4.
