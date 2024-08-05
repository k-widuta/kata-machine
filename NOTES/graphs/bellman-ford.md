## Bellman Ford Algori
The Bellman Ford algorithm computes shortest paths from a single node to all other nodes in a weighted graph. You may be thinking

> Why can't I just use Dijkstra's algorithm for that?

You can, and you should because it's a bit faster. The problem is Dijkstra's algorithm can't handle negative weights in the graph. If there are negative weights, you'll need to use something different like Bellman-Ford.

The Bellman-Ford algorithm consists of two phases.

1. **Relaxation Phase**: This phase consists of N-1 iterations, where N is equal to the number of vertices in the graph. During each iteration the edges are "relaxed", meaning it updates the shortest path estimate for each edge. If there are no negative cycles the distance from the source to all vertices is guaranteed to be correct.

2. **Negative Cycle Detection Phase**: A final iteration is done to check whether any distances are reduced further. If any distance can still be reduced there must be a negative weight cycle in the graph.

To summarize: not only does the Bellman-Ford algorithm handle negative weights, but it properly detects and reports negative cycles.thm

### Negative Cycle
> Negative cycles are loops in the graph that have a negative sum of weights, meaning that traversing the cycle reduces the total cost or distance

It's important for graphs that contain negative weights to be directed, if they weren't then any negative edge would result in a negative cycle.

Negative cycles are a problem because any algorithm is incentivized to continuously take the cycle's route over and over again. After all, the distance decreases infinitely.
