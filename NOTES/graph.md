# Graph
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

## Dijkstra Shortest Path
- if we use arrays - `O(V^2 + E)` runtime
- we should use `priority queue` to have the shortest path - `O(logV(V + E))`
