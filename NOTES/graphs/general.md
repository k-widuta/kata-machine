# Graph
> All trees are graphs, not all graphs are trees

## Representation
### Adjacency list
1. we can use hash map to store `nodes` as keys, and list of `edges` as values

> Better optimized solution:
2. Create eg. `nodes` array list and `adjacency list`. We assign values to the each node (from 0 to N - 1). So each node has the same `index` - in `nodes` array list is the value of the node, and in the `adjacency list` is the list of nodes that node is connected to.

3. We can add new property to the adjacency list - `from`. So from contains current node `value`.


### Adjacency matrix
- Create eg. `nodes` array list and `adjacency list`. We assign values to the each node (from 0 to N - 1). So each node has the same `index` - in `nodes` array list is the value of the node, and in the `adjacency list` is the list of nodes that node is connected to.


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
- So `O(V + E)` means that we will check every vertex, and on every vertex we check every edge
    - We know that E >= V, so technically `O(E)`
