import { AdjacencyMatrix } from "./graph";

function walk(graph: AdjacencyMatrix, curr: number, seen: boolean[], path: number[], needle: number) {
    // Base cases
    if (seen[curr] === true) {
        return false;
    }

    seen[curr] = true;

    // Pre
    path.push(curr)
    if (curr === needle) {
        return true;
    }
   
    // Recursive
    const adj = graph[curr];
    for (let i = 0; i < adj.length; i++) {
        if (adj[i] === 0) {
            continue;
        }
        if (walk(graph, adj[i], seen, path, needle)) {
            return true;
        }
    }

    // Post 
    path.pop();
    return false;

}

function DFS(graph: AdjacencyMatrix, source: number, needle: number) {
    const seen: boolean[] = new Array(graph.length).fill(false);
    const path: number[] = [];

    walk(graph, source, seen, path, needle);

    if (path.length === 0){
        return null;
    }

    return path;

}
