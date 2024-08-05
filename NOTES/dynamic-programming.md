# Dynamic Programming
> "Those who cannot remember the past are doomed to repeat it"
> -Dynamic Programming

Dynamic Programming is an optimization technique. Wherever we see a solution to a problem that has repeated iterations for the same inputs, we can optimize it using Dynamic Programming. The idea is to simply remember the results of subproblems, so that we don't have to re-compute them. This can save our algorithms immense amounts of time.

Problems need to have two properties in order to be improved using dynamic programming:

1. Overlapping subproblems
2. An optimal substructure

## OVERLAPPING SUBPROBLEMS
<img width="667" alt="Screenshot 2024-08-05 at 08 13 07" src="https://github.com/user-attachments/assets/c664e487-90ea-495c-a649-a4ca6a923b9a">

The core concept behind dynamic programming is to divide a problem into sub-problems and save the result for the future so that we will not have to compute that same problem again. Assuming there are some subproblems that repeat, we can save a lot of time by using the cached result.

## OPTIMAL SUBSTRUCTURE
If the optimal solution of the given problem can be obtained by using optimal solutions of its subproblems, then the problem is a fantastic candidate for a dynamic programming algorithm to solve.

For example, the Bellman-Ford algorithm that we covered in the last module is actually a dynamic programming algorithm! The shortest-path problem has the optimal substructure trait.

<img width="684" alt="Screenshot 2024-08-05 at 08 16 13" src="https://github.com/user-attachments/assets/4c7accb3-9738-4e93-b306-5746ca09161c">

In the graph above, let's assume we only knew the following 3 things:

1. The shortest path from `0` to `3` is `0 -> 2 -> 3`
2. The shortest path from `3` to `6` is `3 -> 5 -> 6`
3. `3` is on the shortest path from `0` to `6`
Knowing just those pieces of information, we can guarantee that the shortest path from `0` to `6` is the combination of the two optimal substructures, `0 -> 2 -> 3 -> 5 -> 6`
